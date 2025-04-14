package com.CodeWithRishu.Spring.Data_REST.Demo.repository;

import com.CodeWithRishu.Spring.Data_REST.Demo.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends JpaRepository<JobPost, Integer> {

    // List<JobPost> findByPostProfileContainingOrPostDescContaining(String postProfile, String postDesc);

}