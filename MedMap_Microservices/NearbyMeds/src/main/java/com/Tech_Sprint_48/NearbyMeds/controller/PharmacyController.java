package com.Tech_Sprint_48.NearbyMeds.controller;

import com.Tech_Sprint_48.NearbyMeds.model.Pharmacy;
import com.Tech_Sprint_48.NearbyMeds.model.PharmacyReview;
import com.Tech_Sprint_48.NearbyMeds.service.PharmacyService;
import jakarta.persistence.OneToMany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pharmacies")
public class PharmacyController {

    @Autowired
    private PharmacyService pharmacyService;

    @GetMapping("/all")
    public ResponseEntity<List<Pharmacy>> getAllPharmacies() {
        List<Pharmacy> pharmacies = pharmacyService.getAllPharmacies();
        if (pharmacies.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(pharmacies, HttpStatus.OK);
    }

    @GetMapping("{pharmacyId}")
    public ResponseEntity<Pharmacy> getPharmacyById(@PathVariable Long pharmacyId) {
        Pharmacy pharmacy = pharmacyService.getPharmacyById(pharmacyId);
        if (pharmacy == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(pharmacy, HttpStatus.OK);
    }

    @GetMapping("nearby")
    public ResponseEntity<List<Pharmacy>> getNearbyPharmacies(@RequestParam double latitude,
                                                              @RequestParam double longitude,
                                                              @RequestParam double radians) {
        List<Pharmacy> pharmacies = pharmacyService.getNearbyPharmacies(latitude, longitude, radians);
        if (pharmacies.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(pharmacies, HttpStatus.OK);
    }

    @GetMapping("{pharmacyId}/image")
    public ResponseEntity<byte[]> getPharmacyImage(@PathVariable Long pharmacyId) {
        Pharmacy pharmacy = pharmacyService.getPharmacyById(pharmacyId);
        if (pharmacy.getPharmacyId() > 0) {
            return new ResponseEntity<>(pharmacy.getPharmacyImageData(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/{pharmacyId}/reviews")
    public ResponseEntity<PharmacyReview> addReview(
            @PathVariable Long pharmacyId,
            @RequestBody PharmacyReview review) {
        PharmacyReview newReview = pharmacyService.addReview(pharmacyId, review);
        return new ResponseEntity<>(newReview, HttpStatus.CREATED);
    }

    @GetMapping("/{pharmacyId}/reviews")
    public ResponseEntity<List<PharmacyReview>> getReviews(@PathVariable Long pharmacyId) {
        List<PharmacyReview> reviews = pharmacyService.getReviews(pharmacyId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

}
