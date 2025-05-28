package com.CODEWITHRISHU.Meeting_Service.service;

import com.CODEWITHRISHU.Meeting_Service.model.Meeting;
import com.CODEWITHRISHU.Meeting_Service.model.Participant;
import com.CODEWITHRISHU.Meeting_Service.repository.MeetingRepository;
import com.CODEWITHRISHU.Meeting_Service.repository.ParticipantRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MeetingService {
    @Autowired
    private MeetingRepository meetingRepository;

    @Autowired
    private ParticipantRepository participantRepository;

    // Ensure meeting code is unique before saving (though UUID makes it highly unlikely to collide)
    @Transactional
    public Meeting createMeeting(Meeting meeting) {
        // Set initial status and start time
        meeting.setMeetingStatus(Meeting.MeetingStatus.SCHEDULED);
        meeting.setStartTime(LocalDateTime.now());

        Meeting savedMeeting = meetingRepository.save(meeting);

        // Host automatically joins the meeting
        joinMeeting(savedMeeting.getMeetingCode(), savedMeeting.getHostUserId());

        return savedMeeting;
    }

    public Optional<Meeting> getMeetingById(Long id) {
        return meetingRepository.findById(id);
    }

    public Optional<Meeting> getMeetingByCode(String meetingCode) {
        return meetingRepository.findByMeetingCode(meetingCode);
    }

    public List<Meeting> getMeetingsByHost(Long hostUserId) {
        return meetingRepository.findByHostUserId(hostUserId);
    }

    // @Transactional. This ensures that each of these operations is executed within a single transaction.
    // For ex, in createMeeting, if saving the meeting fails, the subsequent attempt to automatically join
    // the host will be rolled back, preventing data inconsistency. Similarly, in joinMeeting, if adding a
    // participant fails, the entire operation is rolled back.
    @Transactional
    public Participant joinMeeting(String meetingCode, Long userId) {
        Meeting meeting = meetingRepository.findByMeetingCode(meetingCode)
                .orElseThrow(() -> new RuntimeException("Meeting not found :" + meetingCode));

        Optional<Participant> existingParticipant = participantRepository.findByMeetingAndUserId(meeting, userId);
        if (existingParticipant.isPresent()) {
            return existingParticipant.get(); // Participant already in the meeting
        } else {
            Participant newParticipant = new Participant();
            newParticipant.setMeeting(meeting);
            newParticipant.setUserId(userId);
            return participantRepository.save(newParticipant);
        }
    }

    @Transactional
    public void leaveMeeting(String meetingCode, Long userId) {
        Meeting meeting = meetingRepository.findByMeetingCode(meetingCode)
                .orElseThrow(() -> new RuntimeException("Meeting not found :" + meetingCode));

        Participant participant = participantRepository.findByMeetingAndUserId(meeting, userId)
                .orElseThrow(() -> new RuntimeException("Participant not found in this meeting"));

        participant.setLeaveTime(LocalDateTime.now());
        participantRepository.save(participant);

        // Optionally: check if the meeting should be ended if no participants are left
        List<Participant> activeParticipants = participantRepository.findByMeeting(meeting)
                .stream()
                .filter(p -> p.getLeaveTime() == null)
                .toList();

        if (activeParticipants.isEmpty() && meeting.getMeetingStatus() == Meeting.MeetingStatus.ACTIVE) {
            meeting.setMeetingStatus(Meeting.MeetingStatus.ENDED);
            meeting.setEndTime(LocalDateTime.now());
            meetingRepository.save(meeting);
        }
    }

    public List<Participant> getParticipantsInMeeting(String meetingCode) {
        Meeting meeting = meetingRepository.findByMeetingCode(meetingCode)
                .orElseThrow(() -> new RuntimeException("Meeting not found: " + meetingCode));
        return participantRepository.findByMeeting(meeting);
    }
}