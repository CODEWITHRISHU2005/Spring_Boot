package com.CODEWITHRISHU.Meeting_Service.repository;

import com.CODEWITHRISHU.Meeting_Service.model.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long> {
    Optional<Meeting> findByMeetingCode(String meetingCode);
    List<Meeting> findByHostUserId(Long hostUserId);
}