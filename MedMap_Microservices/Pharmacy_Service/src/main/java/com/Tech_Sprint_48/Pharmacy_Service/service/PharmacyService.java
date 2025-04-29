package com.Tech_Sprint_48.Pharmacy_Service.service;

import com.Tech_Sprint_48.Pharmacy_Service.model.Pharmacy;
import com.Tech_Sprint_48.Pharmacy_Service.model.PharmacyReview;
import com.Tech_Sprint_48.Pharmacy_Service.repository.PharmacyRepository;
import com.Tech_Sprint_48.Pharmacy_Service.repository.PharmacyReviewRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PharmacyService {

    @Autowired
    private PharmacyRepository pharmacyRepository;

    @Autowired
    private PharmacyReviewRepository pharmacyReviewRepository;

    public List<Pharmacy> getAllPharmacies() {
        return pharmacyRepository.findAll();
    }

    public List<Pharmacy> getNearbyPharmacies(double latitude, double longitude, double radius) {

        return pharmacyRepository.findNearbyPharmacies(latitude, longitude, radius);
    }

    public Pharmacy getPharmacyById(Long pharmacyId) {
        return pharmacyRepository.findById(pharmacyId).orElse(null);
    }

    public PharmacyReview addReview(Long pharmacyId, PharmacyReview review) {
        Pharmacy pharmacy = pharmacyRepository.findById(pharmacyId)
                .orElseThrow(() -> new EntityNotFoundException("Pharmacy not found"));
        review.setPharmacy(pharmacy);
        return pharmacyReviewRepository.save(review);
    }

    public List<PharmacyReview> getReviews(Long pharmacyId) {
        Pharmacy pharmacy = pharmacyRepository.findById(pharmacyId)
                .orElseThrow(() -> new EntityNotFoundException("Pharmacy not found"));
        return pharmacy.getReviews();
    }
}
