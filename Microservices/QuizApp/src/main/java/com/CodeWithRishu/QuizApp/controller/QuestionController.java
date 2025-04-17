package com.CodeWithRishu.QuizApp.controller;

import com.CodeWithRishu.QuizApp.model.Questions;
import com.CodeWithRishu.QuizApp.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;
    @GetMapping("allQuestions")
    public List<Questions> getAllQuestions() {
        return questionService.getAllQuestions().getBody();
    }

    @GetMapping("category/{category}")
    public List<Questions> getAllQuestionsByCategory(@PathVariable String category) {
        return questionService.getQuestionsByCategory(category).getBody();
    }

    @PostMapping("/add")
    public ResponseEntity<String> addQuestion(@RequestBody Questions question) {
        return questionService.addQuestion(question);
    }

}
