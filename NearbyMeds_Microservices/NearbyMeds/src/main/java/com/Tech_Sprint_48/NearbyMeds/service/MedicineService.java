package com.Tech_Sprint_48.NearbyMeds.service;

import com.Tech_Sprint_48.NearbyMeds.model.Medicine;
import com.Tech_Sprint_48.NearbyMeds.repository.MedicineRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
