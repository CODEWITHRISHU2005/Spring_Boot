package com.CodeWithRishu.Spring_Security_Demo.repository;

import com.CodeWithRishu.Spring_Security_Demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
}