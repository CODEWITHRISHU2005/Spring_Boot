package com.Tech_Sprint_48.Pharmacy_Service.controller;

import com.Tech_Sprint_48.Pharmacy_Service.model.Pharmacy;
import com.Tech_Sprint_48.Pharmacy_Service.service.PharmacyService;
import feign.template.Template;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/pharmacies")
public class PharmacyController {

    @Autowired
    Template template;

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

    @PostMapping("{pharmacyId}/reviews")
    public ResponseEntity<Pharmacy> addReview(@PathVariable Long pharmacyId, @RequestParam String review) {
        Pharmacy pharmacy = pharmacyService.getPharmacyById(pharmacyId);
        if (pharmacy == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        pharmacy.setPharmacyReviews(Collections.singletonList(review));

        return new ResponseEntity<>( HttpStatus.CREATED);
    }

    @GetMapping("{pharmacyId}/reviews")
    public ResponseEntity<List<String>> getReviews(@PathVariable Long pharmacyId) {
        Pharmacy pharmacy = pharmacyService.getPharmacyById(pharmacyId);
        if (pharmacy == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        List<String> reviews = pharmacy.getPharmacyReviews();
        if (reviews.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @PostMapping("{pharmacyId}/rating")
    public ResponseEntity<Pharmacy> addRating(@PathVariable Long pharmacyId, @RequestParam int rating) {
        Pharmacy pharmacy = pharmacyService.getPharmacyById(pharmacyId);
        if (pharmacy == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        pharmacy.setPharmacyRating(rating);

        return new ResponseEntity<>( HttpStatus.CREATED);
    }

    @GetMapping("{pharmacyId}/rating")
    public ResponseEntity<Integer> getRating(@PathVariable Long pharmacyId) {
        Pharmacy pharmacy = pharmacyService.getPharmacyById(pharmacyId);
        if (pharmacy == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(pharmacy.getPharmacyRating(), HttpStatus.OK);
    }

}
