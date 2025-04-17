package com.CodeWithRishu.Quiz_Service.service;

import com.CodeWithRishu.Quiz_Service.feign.QuizInterface;
import com.CodeWithRishu.Quiz_Service.model.QuestionWrapper;
import com.CodeWithRishu.Quiz_Service.model.Quiz;
import com.CodeWithRishu.Quiz_Service.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.CodeWithRishu.Quiz_Service.repository.QuizRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuizService {
    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private QuizInterface quizInterface;

    public ResponseEntity<String> createQuiz(String category, int numQ, String tittle) {
        List<Integer> questions = quizInterface.getQuestionsForQuiz(category, numQ).getBody();
        Quiz quiz = new Quiz();
        quiz.setTittle(tittle);
        quiz.setQuestionsIds(questions);
        quizRepository.save(quiz);

        return new ResponseEntity<>("Quiz Created Successfully", HttpStatus.CREATED);
    }


    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(int id) {

        Optional<Quiz> quiz = quizRepository.findById(id);
        List<Integer> questionsIds = quiz.get().getQuestionsIds();

        return quizInterface.getQuestionsFromId(questionsIds);
    }

    public ResponseEntity<Integer> calculateResult(int id, List<Response> responses) {

        return quizInterface.getScore(responses);
    }
}
