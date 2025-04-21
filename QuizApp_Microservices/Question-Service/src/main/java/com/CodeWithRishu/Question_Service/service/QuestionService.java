package com.CodeWithRishu.Question_Service.service;

import com.CodeWithRishu.Question_Service.model.QuestionWrapper;
import com.CodeWithRishu.Question_Service.model.Questions;
import com.CodeWithRishu.Question_Service.model.Response;
import com.CodeWithRishu.Question_Service.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    public ResponseEntity<List<Integer>> getQuestionsForQuiz(String category, int numQ) {
        List<Integer> questionsList = questionRepository.findRandomQuestionsByCategory(category, numQ);

        if (questionsList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return new ResponseEntity<>(questionsList, HttpStatus.OK);
    }

    public ResponseEntity<List<QuestionWrapper>> getQuestionsFromId(List<Integer> questionIds) {
        List<QuestionWrapper> wrappers = new ArrayList<>();
        List<Questions> questions = new ArrayList<>();

        for (int id : questionIds) {
            questions.add(questionRepository.findById(id).orElse(null));
        }
        for (Questions question : questions) {
            if (question != null) {
                QuestionWrapper wrapper = new QuestionWrapper(
                        question.getId(),
                        question.getQuestionTittle(),
                        question.getOptionA(),
                        question.getOptionB(),
                        question.getOptionC(),
                        question.getOptionD()
                );
                wrappers.add(wrapper);
            }
        }

        return new ResponseEntity<>(wrappers, HttpStatus.OK);
    }

    public ResponseEntity<Integer> getScore(List<Response> responses) {
        int right = 0;
        for (Response response : responses) {
            Optional<Questions> question = questionRepository.findById(response.getId());
            if (response.getResponse().equals(question.get().getRightAnswer()))
                right++;
        }
        return new ResponseEntity<>(right, HttpStatus.OK);
    }
}
