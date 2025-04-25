package com.Tech_Sprint_48.NearbyMeds.controller;

import com.Tech_Sprint_48.NearbyMeds.model.Pharmacy;
import com.Tech_Sprint_48.NearbyMeds.service.PharmacyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("nearby")
    public ResponseEntity<List<Pharmacy>> getNearbyPharmacies() {
    }

}
