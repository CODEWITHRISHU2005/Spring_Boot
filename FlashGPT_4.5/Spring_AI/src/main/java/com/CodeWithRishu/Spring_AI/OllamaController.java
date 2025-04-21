package com.CodeWithRishu.Spring_AI;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.ai.ollama.OllamaChatModel;

@RestController
@RequestMapping("/api/ollama")
@CrossOrigin(origins = "http://localhost:5173")
public class OllamaController {

    private final ChatClient chatClient;

    public OllamaController(OllamaChatModel chatModel) {
        this.chatClient = ChatClient.create(chatModel);
    }


//    public OlIamaController(ChatClient.Builder builder) {
//        this.chatClient = builder.defaultAdvisors(new MessageChatMemoryAdvisor(new InMemoryChatMemory()))
//                .build();
//
//    }

    @GetMapping("/{message}")
    public ResponseEntity<String> getAnswer(@PathVariable String message) {

        ChatResponse chatResponse = chatClient
                .prompt(message)
                .call()
                .chatResponse();


        assert chatResponse != null;
        System.out.println(chatResponse.getMetadata().getModel());


        String response = chatResponse
                .getResult()
                .getOutput()
                .getText();

        return ResponseEntity.ok(response);
    }
}
