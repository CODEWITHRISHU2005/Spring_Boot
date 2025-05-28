package com.CODEWITHRISHU.Meeting_Service.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
public class Meeting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String meetingCode;

    @Column(nullable = false)
    private String meetingTitle;

    @Column(nullable = false)
    private Long hostUserId; // ID of the user who created the meeting

    private LocalDateTime startTime;
    private LocalDateTime endTime; // For scheduled meetings, or null for instant meetings

    @Enumerated(EnumType.STRING)
    private MeetingStatus meetingStatus; // Eg. SCHEDULED, ACTIVE, ENDED

    public Meeting() {
        this.meetingCode = generateMeetingCode();
        this.meetingCode = String.valueOf(MeetingStatus.SCHEDULED); //Default status
        this.startTime = LocalDateTime.now(); // For instant meetings, set to creation time
    }

    private String generateMeetingCode() {
        String uuid = UUID.randomUUID().toString().substring(0, 12);
        return uuid.substring(0, 3) + "-" +
                uuid.substring(3, 7) + "-" +
                uuid.substring(7, 11);
    }

    public enum MeetingStatus {
        // MeetingStatus can be treated like a class
        // Below are the objects of the class MeetingStatus

        SCHEDULED,
        ACTIVE,
        ENDED
    }
}
