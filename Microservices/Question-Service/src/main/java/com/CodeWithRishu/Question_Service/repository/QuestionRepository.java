package com.CodeWithRishu.Question_Service.repository;

import com.CodeWithRishu.Question_Service.model.Questions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Questions, Integer> {
    List<Questions> findByCategory(String category);

    @Query(value = "SELECT q.id FROM question q WHERE q.category=:category ORDER BY RANDOM() LIMIT :numQ",
    nativeQuery = true)
    List<Integer> findRandomQuestionsByCategory(String category, int numQ);
}