package com.Tech_Sprint_48.NearbyMeds.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Medicine {

    @Id
    private Long medicineId;
    private String brandName; // hole mark by manufacturer
    private String genericName; // general name
    private String description;
    private String dosageForm;
    private String strength;
    private String sideEffects;
    private String efficacyRating;
    private String userReviewScore;

    @OneToMany(mappedBy = "medicine")
    private List<Price> prices;
}
