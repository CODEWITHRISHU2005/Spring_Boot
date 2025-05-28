package com.CODEWITHRISHU.Meeting_Service.repository;

import com.CODEWITHRISHU.Meeting_Service.model.Meeting;
import com.CODEWITHRISHU.Meeting_Service.model.Participant;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface ParticipantRepository extends JpaRepository<Participant, Long> {
    List<Participant> findByMeeting(Meeting meeting);
    Optional<Participant> findByMeetingAndUserId(Meeting meeting, Long userId);
}