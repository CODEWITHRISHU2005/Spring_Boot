package com.CODEWITHRISHU.Meeting_Service.controller;

import com.CODEWITHRISHU.Meeting_Service.model.Meeting;
import com.CODEWITHRISHU.Meeting_Service.service.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/meetings")
public class MeetingController {
    @Autowired
    private MeetingService meetingService;

    @PostMapping("/create")
    public ResponseEntity<String> createMeeting(@RequestBody Meeting meeting) {
        return ResponseEntity.ok(meetingService.createMeeting(meeting));
    }

    @
}
