package org.CodeWithRishu.RestQuickHire.repository;

import org.CodeWithRishu.RestQuickHire.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
}