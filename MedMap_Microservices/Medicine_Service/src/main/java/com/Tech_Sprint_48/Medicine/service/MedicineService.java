package com.Tech_Sprint_48.Medicine.service;

import com.Tech_Sprint_48.Medicine.model.Medicine;
import com.Tech_Sprint_48.Medicine.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class MedicineService {
    @Autowired
    private MedicineRepository medicineRepository;

    public List<Medicine> getAllMedicines() {
        return medicineRepository.findAll();
    }

    public List<Medicine> searchMedicines(String keyword) {
        return medicineRepository.searchMedicineByKeyword(keyword);
    }

    public Medicine getMedicineById(Long medicineId) {
        return medicineRepository.findById(medicineId).orElse(null);
    }
}