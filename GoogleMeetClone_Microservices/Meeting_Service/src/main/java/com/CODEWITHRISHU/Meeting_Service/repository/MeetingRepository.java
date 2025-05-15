package com.CODEWITHRISHU.Meeting_Service.repository;

import com.CODEWITHRISHU.Meeting_Service.model.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeetingRepository extends JpaRepository<Integer, Meeting> {
}
