package com.CODEWITHRISHU.Signaling_Service.model;

import lombok.Data;

@Data
public class SignalingMessage {
    private String type; // "offer", "answer", "candidate", "join", "leave", "ready"
    private String sdp; // Session Description Protocol for offer/answer
    private String candidate; // ICE candidate for WebRTC
    private String sdpMid; // ICE candidate property
    private Integer sdpMLineIndex; // Media line index for ICE candidates
    private String targetUserId; // User ID of the target user for signaling messages
    private String senderUserId; // User ID of the sender for signaling messages
    private String meetingCode; // The meeting code this message belongs to
    private String displayName; // Optional: sender's display name for join announcements
}
