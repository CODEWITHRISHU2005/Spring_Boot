package com.Tech_Sprint_48.NearbyMeds.model;

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
    private String brandedMedicine;
    private String description;
    private String dosageForm;
    private String strength;
    private String sideEffects;
    private String efficacyRating;
    private String userReviewScore;

    @OneToMany(mappedBy = "medicine")
    private List<Price> prices;

    @ManyToOne
    @JoinColumn(name = "generic_name_id", referencedColumnName = "genericNameId", nullable = false)
    private GenericMedicine genericMedicine;
}