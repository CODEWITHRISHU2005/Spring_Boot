package com.CodeWithRishu.QuizApp.service;

import com.CodeWithRishu.QuizApp.model.Questions;
import com.CodeWithRishu.QuizApp.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;


    public ResponseEntity<List<Questions>> getAllQuestions() {
        try {
            List<Questions> questions = questionRepository.findAll();
            return ResponseEntity.ok(questions);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    public ResponseEntity<List<Questions>> getQuestionsByCategory(String category) {
        try {
            List<Questions> questions = questionRepository.findByCategory(category);
            return ResponseEntity.ok(questions);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    public ResponseEntity<String> addQuestion(Questions question) {
        try {
            questionRepository.save(question);
            return ResponseEntity.ok("Question added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error adding question");
        }
    }
}
