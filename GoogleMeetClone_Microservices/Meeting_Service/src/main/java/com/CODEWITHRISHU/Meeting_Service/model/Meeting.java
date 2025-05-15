package com.CODEWITHRISHU.Meeting_Service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Meeting {
    @Id
    private int meetingId;
    private String hostId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String title;
}
