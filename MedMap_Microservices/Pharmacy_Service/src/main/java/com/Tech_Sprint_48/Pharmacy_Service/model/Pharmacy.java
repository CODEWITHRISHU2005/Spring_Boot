package com.Tech_Sprint_48.Pharmacy_Service.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pharmacy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pharmacyId;
    private String name;
    private String address;
    private String phoneNumber;
    private String email;
    private String pharmacyImageName;
    private String pharmacyImageType;
    @Lob
    private byte[] pharmacyImageData;
    private String latitude;
    private String longitude;
    private String openingHours;
    private String closingHours;
    private String description;
    private String deliveryOptions;
    private String paymentOptions;
    private String insuranceAccepted;
    private String servicesOffered;
    private String specialties;

    @OneToMany(mappedBy = "pharmacy")
    private List<PharmacyReview> reviews;
}