package com.CODEWITHRISHU.WebSocketDemo.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class NotificationController {

    @MessageMapping("/sendNotification")
    @SendTo("/topic/notifications")
    public String sendNotification(String message) {
        // This method will handle sending notifications to the WebSocket clients.
        // For now, it just returns the message.
        System.out.println("Sending notification: " + message);
        return "Notification sent: " + message;
    }
}
