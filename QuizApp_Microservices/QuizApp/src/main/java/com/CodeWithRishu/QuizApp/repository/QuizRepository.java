package com.CodeWithRishu.QuizApp.repository;

import com.CodeWithRishu.QuizApp.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Integer> {
}
