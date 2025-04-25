package com.Tech_Sprint_48.NearbyMeds.service;

import com.Tech_Sprint_48.NearbyMeds.repository.MedicineRepository;
import com.Tech_Sprint_48.NearbyMeds.repository.PharmacyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PharmacyService {

    @Autowired
    private PharmacyRepository pharmacyRepository;
}
