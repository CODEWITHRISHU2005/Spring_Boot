package com.CODEWITHRISHU.Signaling_Service.Handler;

import com.CODEWITHRISHU.Signaling_Service.model.SignalingMessage;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class SignalingWebSocketHandler extends TextWebSocketHandler {
    private static final Logger logger = LoggerFactory.getLogger(SignalingWebSocketHandler.class);
    private final ObjectMapper objectMapper = new ObjectMapper();

    // Map: meetingCode -> Map: userId -> WebSocketSession
    private final Map<String, Map<String, WebSocketSession>> meetings = new ConcurrentHashMap<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        String meetingCode = (String) session.getAttributes().get("meetingCode");
        String userId = (String) session.getAttributes().get("userId");

        logger.info("New WebSocket session established for meeting {} and user {}", meetingCode, userId);
        meetings.computeIfAbsent(meetingCode, k -> new ConcurrentHashMap<>()).put(userId, session);

        // Notify other participants that a new user has joined
        SignalingMessage joinMessage = new SignalingMessage();
        joinMessage.setType("join");
        joinMessage.setSenderUserId(userId);
        joinMessage.setMeetingCode(meetingCode);
        // joinMessage.setDisplayName((String) session.getAttributes().get("displayName"));

        broadcastMessage(meetingCode, joinMessage, userId); // Broadcast to others
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String meetingCode = (String) session.getAttributes().get("meetingCode");
        String senderUserId = (String) session.getAttributes().get("userId");

        SignalingMessage signalingMessage = objectMapper.readValue(message.getPayload(), SignalingMessage.class);
        signalingMessage.setSenderUserId(senderUserId); // Ensure sender is set

        logger.debug("Received message from user {} in meeting {}: {}", senderUserId, meetingCode, signalingMessage.getType());

        switch (signalingMessage.getType()) {
            case "offer":
            case "answer":
            case "candidate":
                // Forward offer/answer/candidate to the target user
                String targetUserId = signalingMessage.getTargetUserId();
                if (targetUserId != null) {
                    sendMessageToUser(meetingCode, targetUserId, signalingMessage);
                } else {
                    logger.warn("Received signaling message without targetUserId: {}", signalingMessage.getType());
                }
                break;
            case "ready":
                // When a user is ready to receive offers, send them existing participants
                Map<String, WebSocketSession> participants = meetings.get(meetingCode);
                if (participants != null) {
                    for (Map.Entry<String, WebSocketSession> entry : participants.entrySet()) {
                        String participantId = entry.getKey();
                        if (!participantId.equals(senderUserId)) {
                            SignalingMessage existingParticipantMessage = new SignalingMessage();
                            existingParticipantMessage.setType("new-participant");
                            existingParticipantMessage.setSenderUserId(participantId);
                            sendMessageToUser(meetingCode, senderUserId, existingParticipantMessage);
                        }
                    }
                }
                break;
            default:
                logger.warn("Unknown signaling message type: {}", signalingMessage.getType());
                break;
        }
    }

    private void sendMessageToUser(String meetingCode, String targetUserId, SignalingMessage message) {
        Map<String, WebSocketSession> participants = meetings.get(meetingCode);
        if (participants != null) {
            WebSocketSession targetSession = participants.get(targetUserId);
            if (targetSession != null && targetSession.isOpen()) {
                try {
                    targetSession.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
                    logger.debug("Sent message to user {} in meeting {}: {}", targetUserId, meetingCode, message.getType());
                } catch (IOException | JsonProcessingException e) {
                    logger.error("Error sending message to user {}: {}", targetUserId, e.getClass());
                }
            } else {
                logger.warn("Target user {} not found or session closed in meeting {}", targetUserId, meetingCode);
            }
        }
    }

    private void broadcastMessage(String meetingCode, SignalingMessage message, String excludeUserId) {
        Map<String, WebSocketSession> participants = meetings.get(meetingCode);
        if (participants != null) {
            participants.forEach((userId, session) -> {
                if (!userId.equals(excludeUserId) && session.isOpen()) {
                    try {
                        session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
                        logger.debug("Broadcasted message to user {} in meeting {}: {}", userId, meetingCode, message.getType());
                    } catch (IOException e) {
                        logger.error("Error broadcasting message to user {}: {}", userId, e.getMessage());
                    }
                }
            });
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        String meetingCode = (String) session.getAttributes().get("meetingCode");
        String userId = (String) session.getAttributes().get("userId");

        logger.info("WebSocket connection closed for user {} in meeting {}. Status: {}", userId, meetingCode, status);

        Map<String, WebSocketSession> participantSessions = meetings.get(meetingCode);
        if (participantSessions != null) {
            participantSessions.remove(userId);
            if (participantSessions.isEmpty()) {
                meetings.remove(meetingCode); // Remove meeting if no participants left
                logger.info("Meeting {} is now empty and removed.", meetingCode);
            } else {
                // Notify other participants about user leaving
                SignalingMessage leaveMessage = new SignalingMessage();
                leaveMessage.setType("leave");
                leaveMessage.setSenderUserId(userId);
                leaveMessage.setMeetingCode(meetingCode);
                broadcastMessage(meetingCode, leaveMessage, userId);
            }
        }
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        String meetingCode = (String) session.getAttributes().get("meetingCode");
        String userId = (String) session.getAttributes().get("userId");
        logger.error("WebSocket transport error for user {} in meeting {}: {}", userId, meetingCode, exception.getMessage());
        // session.close(CloseStatus.SERVER_ERROR); // Or handle more gracefully
    }
}
