package com.Tech_Sprint_48.NearbyMeds.service;

import com.Tech_Sprint_48.NearbyMeds.model.Medicine;
import com.Tech_Sprint_48.NearbyMeds.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class MedicineService {
    @Autowired
    private MedicineRepository medicineRepository;

    private static final int DATA_VERSION = 1;

    public List<Medicine> getAllMedicines() {
        return medicineRepository.findAll();
    }

    public List<Medicine> searchMedicines(String keyword) {
        return medicineRepository.searchMedicineByKeyword(keyword);
    }

    public Medicine getMedicineById(Long medicineId) {
        return medicineRepository.findById(medicineId).orElse(null);
    }

    public int getDataVersion() {
        return DATA_VERSION;
    }
}
