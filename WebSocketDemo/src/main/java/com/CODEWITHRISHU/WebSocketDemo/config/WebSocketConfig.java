package com.CODEWITHRISHU.WebSocketDemo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // This method configures the message broker for handling WebSocket messages.
        config.enableSimpleBroker("/topic");
        config.setApplicationDestinationPrefixes("/app");
        // The above configuration sets up a simple in-memory message broker
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").setAllowedOrigins("http://localhost:63342").withSockJS();
        /*
        -> The above line allows cross-origin requests from any domain.
        -> In production, you should restrict this to specific domains of security.
        */
    }
}
