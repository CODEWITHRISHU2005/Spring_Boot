package com.Tech_Sprint_48.NearbyMeds.service;

import com.Tech_Sprint_48.NearbyMeds.model.Pharmacy;
import com.Tech_Sprint_48.NearbyMeds.model.PharmacyReview;
import com.Tech_Sprint_48.NearbyMeds.model.UserPrincipal;
import com.Tech_Sprint_48.NearbyMeds.model.Users;
import com.Tech_Sprint_48.NearbyMeds.repository.PharmacyRepository;
import com.Tech_Sprint_48.NearbyMeds.repository.PharmacyReviewRepository;
import com.Tech_Sprint_48.NearbyMeds.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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
