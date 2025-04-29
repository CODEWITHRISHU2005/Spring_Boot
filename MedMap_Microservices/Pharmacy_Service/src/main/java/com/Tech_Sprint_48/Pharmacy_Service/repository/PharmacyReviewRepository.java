package com.Tech_Sprint_48.Pharmacy_Service.repository;

import com.Tech_Sprint_48.NearbyMeds.model.PharmacyReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PharmacyReviewRepository extends JpaRepository<PharmacyReview, Long> {
}