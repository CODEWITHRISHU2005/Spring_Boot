package com.CodeWithRishu.Question_Service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Questions {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String questionTittle;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private String rightAnswer;
    private String difficultyLevel;
    private String category;
}