package com.CodeWithRishu.Question_Service.controller;

import com.CodeWithRishu.Question_Service.model.QuestionWrapper;
import com.CodeWithRishu.Question_Service.model.Questions;
import com.CodeWithRishu.Question_Service.model.Response;
import com.CodeWithRishu.Question_Service.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    Environment environment;

    @GetMapping("allQuestions")
    public List<Questions> getAllQuestions() {
        return (List<Questions>) questionService.getAllQuestions();
    }

    @GetMapping("category/{category}")
    public List<Questions> getAllQuestionsByCategory(@PathVariable String category) {
        return (List<Questions>) questionService.getQuestionsByCategory(category);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addQuestion(@RequestBody Questions question) {
        return questionService.addQuestion(question);
    }

    @GetMapping("generate")
    public ResponseEntity<List<Integer>> getQuestionsForQuiz
            (@RequestParam String category, @RequestParam int numQ) {
        return questionService.getQuestionsForQuiz(category, numQ);
    }

    @PostMapping("getQuestions")
    public ResponseEntity<List<QuestionWrapper>> getQuestionsFromId(@RequestBody List<Integer> questionIds) {
        System.out.println(environment.getProperty("local.server.port"));
        return questionService.getQuestionsFromId(questionIds);
    }

    @PostMapping("getScore")
    public ResponseEntity<Integer> getScore(@RequestBody List<Response> responses) {
        return questionService.getScore(responses);
    }

}
