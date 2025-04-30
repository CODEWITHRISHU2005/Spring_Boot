package com.Tech_Sprint_48.Pharmacy_Service.service;

import com.Tech_Sprint_48.Pharmacy_Service.model.Pharmacy;
import com.Tech_Sprint_48.Pharmacy_Service.repository.PharmacyRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PharmacyService {

    @Autowired
    private PharmacyRepository pharmacyRepository;

    public List<Pharmacy> getAllPharmacies() {
        return pharmacyRepository.findAll();
    }

    public List<Pharmacy> getNearbyPharmacies(double latitude, double longitude, double radius) {

        return pharmacyRepository.findNearbyPharmacies(latitude, longitude, radius);
    }

    public Pharmacy getPharmacyById(Long pharmacyId) {
        return pharmacyRepository.findById(pharmacyId).orElse(null);
    }
}
