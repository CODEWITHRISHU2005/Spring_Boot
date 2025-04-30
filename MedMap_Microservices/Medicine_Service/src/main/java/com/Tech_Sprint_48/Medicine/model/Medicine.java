package com.Tech_Sprint_48.Medicine.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Medicine {

    @Id
    private Long medicineId;
    private String name;
    private String description;
    private String dosageForm;
    private String strength;
    private String sideEffects;
    private String medicineRating;

    @ElementCollection
    private List<String> medicineReviews;
}