package com.Tech_Sprint_48.NearbyMeds.repository;

import com.Tech_Sprint_48.NearbyMeds.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
    Users findByUsername(String username);
}