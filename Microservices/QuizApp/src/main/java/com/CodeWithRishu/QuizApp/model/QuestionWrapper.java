package com.CodeWithRishu.QuizApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class QuestionWrapper {
    private int id;
    private String questionTittle;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
}
