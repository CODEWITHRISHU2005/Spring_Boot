package com.Tech_Sprint_48.NearbyMeds.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Price {

    @Id
    private Long priceId;
    private Long medicineId;
    private Long pharmacyId;
    private String priceValue;

}
