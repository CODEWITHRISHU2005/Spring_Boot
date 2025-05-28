package com.CODEWITHRISHU.Meeting_Service.controller;

import com.CODEWITHRISHU.Meeting_Service.model.Meeting;
import com.CODEWITHRISHU.Meeting_Service.model.Participant;
import com.CODEWITHRISHU.Meeting_Service.service.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/meetings")
public class MeetingController {
    @Autowired
    private MeetingService meetingService;

    @PostMapping("/create")
    public ResponseEntity<Meeting> createMeeting(@RequestBody Meeting meeting) {
        Meeting createdMeeting = meetingService.createMeeting(meeting);
        return new ResponseEntity<>(createdMeeting, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Meeting> getMeetingById(@PathVariable Long id) {
        return meetingService.getMeetingById(id)
                .map(meeting -> new ResponseEntity<>(meeting, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/code/{meetingCode}")
    public ResponseEntity<Meeting> getMeetingByCode(@PathVariable String meetingCode) {
        return meetingService.getMeetingByCode(meetingCode)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/host/{hostUserId}")
    public ResponseEntity<List<Meeting>> getMeetingsByHost(@PathVariable Long hostUserId) {
        List<Meeting> meetings = meetingService.getMeetingsByHost(hostUserId);
        return ResponseEntity.ok(meetings);
    }

    @PostMapping("/join/{meetingCode}/{userId}")
    public ResponseEntity<Participant> joinMeeting(@PathVariable String meetingCode, @PathVariable Long userId) {
        Participant participant = meetingService.joinMeeting(meetingCode, userId);
        return new ResponseEntity<>(participant, HttpStatus.OK);
    }

    @PostMapping("/leave/{meetingCode}/{userId}")
    public ResponseEntity<Void> leaveMeeting(@PathVariable String meetingCode, @PathVariable Long userId) {
        meetingService.leaveMeeting(meetingCode, userId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{meetingCode}/participants")
    public ResponseEntity<List<Participant>> getParticipants(@PathVariable String meetingCode) {
        List<Participant> participants = meetingService.getParticipantsInMeeting(meetingCode);
        return ResponseEntity.ok(participants);
    }
}
