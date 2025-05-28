package com.CODEWITHRISHU.Meeting_Service.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "meeting_id", nullable = false)
    private Meeting meeting;

    @Column(nullable = false)
    private Long userId; // ID of the user who joined the meeting

    private LocalDateTime joinedTime; // Time when the user joined the meeting
    private LocalDateTime leaveTime; // Nullable if the user is still in the meeting
}
