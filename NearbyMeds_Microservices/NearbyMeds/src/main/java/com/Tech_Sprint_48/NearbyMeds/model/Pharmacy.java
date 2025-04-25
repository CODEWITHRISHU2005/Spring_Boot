package com.Tech_Sprint_48.NearbyMeds.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private String openingHours;
    private String closingHours;
    private String latitude;
    private String longitude;
    private String description;
    private String website;
    private String imageUrl;
    private String rating;
    private String reviews;
    private String distance;
    private String availability;
    private String deliveryOptions;
    private String paymentOptions;
    private String insuranceAccepted;
    private String pharmacyType;
    private String servicesOffered;
    private String specialties;
}
