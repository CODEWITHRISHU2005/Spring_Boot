package com.Tech_Sprint_48.NearbyMeds.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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

    @ManyToOne
    @JoinColumn(name = "medicine_id", referencedColumnName = "medicineId", nullable = false)
    private Medicine medicine;

    @ManyToOne
    @JoinColumn(name = "pharmacy_id", referencedColumnName = "pharmacyId", nullable = false)
    private Pharmacy pharmacy;

    private String priceValue;

}
