package com.Tech_Sprint_48.Medicine.service;

import com.Tech_Sprint_48.Medicine.model.Medicine;
import com.Tech_Sprint_48.Medicine.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Medicine addRating(Long medicineId, Double rating) {
        Medicine medicine = medicineRepository.findById(medicineId).orElse(null);
        if (medicine != null) {
            String userReviewScore = medicine.getUserReviewScore();
            List<String> scores = new ArrayList<>(Arrays.asList(userReviewScore.split(",")));
            scores.add(String.valueOf(rating));
            String updatedScores = String.join(",", scores);
            medicine.setUserReviewScore(updatedScores);
        }
        assert medicine != null;
        return medicineRepository.save(medicine);
    }
}