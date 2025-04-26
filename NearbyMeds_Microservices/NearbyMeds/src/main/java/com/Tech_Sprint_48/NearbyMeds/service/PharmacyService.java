package com.Tech_Sprint_48.NearbyMeds.service;

import com.Tech_Sprint_48.NearbyMeds.model.Pharmacy;
import com.Tech_Sprint_48.NearbyMeds.repository.MedicineRepository;
import com.Tech_Sprint_48.NearbyMeds.repository.PharmacyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PharmacyService {

    @Autowired
    private PharmacyRepository pharmacyRepository;

    public List<Pharmacy> getAllPharmacies() {
    }

    public List<Pharmacy> getNearbyPharmacies(double latitude, double longitude, double radius) {
        return pharmacyRepository.findNearbyPharmacies(latitude, longitude, radius);
    }

    public Pharmacy getPharmacyById(Long pharmacyId) {
        return pharmacyRepository.findById(pharmacyId).orElse(null);
    }
}
