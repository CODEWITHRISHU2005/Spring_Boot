package com.CodeWithRishu.Quiz_Service.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class QuizDto {
    String categoryName;
    int numQuestions;
    String tittle;
}
