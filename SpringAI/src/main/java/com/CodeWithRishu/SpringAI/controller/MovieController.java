package com.CodeWithRishu.SpringAI.controller;

import com.CodeWithRishu.SpringAI.record.Movie;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.converter.BeanOutputConverter;
import org.springframework.ai.converter.ListOutputConverter;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.convert.support.DefaultConversionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/movie")
public class MovieController {
    private final ChatClient chatClient;

    public MovieController(OpenAiChatModel chatModel) {
        this.chatClient = ChatClient.create(chatModel);
    }

    @GetMapping("/top5")
    public List<String> getTop5Movies(@RequestParam String name) {
        return chatClient.prompt()
                .user(u -> u.text("List top 5 movies of {name}").param("name", name))
                .call()
                .entity(new ListOutputConverter(new DefaultConversionService()));
    }

    @GetMapping("/movieData")
    public Movie getMovieData(@RequestParam String name) {

        BeanOutputConverter<Movie> opCon = new BeanOutputConverter<Movie>(Movie.class);

        return chatClient.prompt()
                .user(u -> u.text("Get me the best movie of {name}").param("name", name))
                .call()
                .entity(new BeanOutputConverter<Movie>(Movie.class));
    }

    @GetMapping("/moviesList")
    public List<Movie> getMovieList(@RequestParam String name) {

        BeanOutputConverter<Movie> opCon = new BeanOutputConverter<Movie>(Movie.class);

        return chatClient.prompt()
                .user(u -> u.text("Top 5 movies of {name}").param("name", name))
                .call()
                .entity(new BeanOutputConverter<List<Movie>>(new ParameterizedTypeReference<List<Movie>>() {
                }));
    }

}