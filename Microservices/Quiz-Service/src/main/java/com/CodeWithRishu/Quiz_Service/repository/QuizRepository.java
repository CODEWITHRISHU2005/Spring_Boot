package com.CodeWithRishu.Quiz_Service.repository;

import com.CodeWithRishu.Quiz_Service.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Integer> {
}
