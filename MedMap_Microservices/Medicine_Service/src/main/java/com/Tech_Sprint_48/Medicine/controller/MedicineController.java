package com.Tech_Sprint_48.Medicine.controller;

import com.Tech_Sprint_48.Medicine.model.Medicine;
import com.Tech_Sprint_48.Medicine.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicines")
public class MedicineController {
    @Autowired
    private MedicineService medicineService;

    @GetMapping("/all")
    public ResponseEntity<List<Medicine>> getAllMedicines() {
        List<Medicine> medicines = medicineService.getAllMedicines();
        if (medicines.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(medicines, HttpStatus.OK);
    }

    @GetMapping("/{medicineId}")
    public ResponseEntity<Medicine> getMedicineById(@PathVariable Long medicineId) {
        Medicine medicine = medicineService.getMedicineById(medicineId);
        if (medicine == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(medicine, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Medicine>> searchMedicines(@RequestParam String keyword) {
        List<Medicine> medicines = medicineService.searchMedicines(keyword);
        return new ResponseEntity<>(medicines, HttpStatus.OK);
    }

    @PostMapping("/{medicineId}/rating")
    public ResponseEntity<Medicine> addRating(
            @PathVariable Long medicineId,
            @RequestParam int rating) {
        Medicine ratings = medicineService.getMedicineById(medicineId);
        if (ratings == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (rating < 1 || rating > 5) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(ratings, HttpStatus.OK);
    }

    @GetMapping("{medicineId}/rating")
    public ResponseEntity<String> getRating(@PathVariable Long medicineId) {
        Medicine medicine = medicineService.getMedicineById(medicineId);
        if (medicine == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        String rating = medicine.getMedicineRating();
        if (rating == null || rating.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(rating, HttpStatus.OK);
    }

    @PostMapping("/{medicineId}/review")
    public ResponseEntity<Medicine> addReview(
            @PathVariable Long medicineId,
            @RequestParam String review) {
        Medicine updatedMedicine = medicineService.addReview(medicineId, review);
        if (updatedMedicine == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(updatedMedicine, HttpStatus.OK);
    }

    @GetMapping("/{medicineId}/review")
    public ResponseEntity<List<String>> getReviews(@PathVariable Long medicineId) {
        Medicine medicine = medicineService.getMedicineById(medicineId);
        List<String> reviews = medicine.getMedicineReviews();
        if (reviews == null || reviews.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

}