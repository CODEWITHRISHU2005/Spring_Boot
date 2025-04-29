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

    @GetMapping("/medicines/version")
    public int getDataVersion() {
        return medicineService.getDataVersion();
    }

    @PostMapping("/{medicineId}/rating")
    public ResponseEntity<Medicine> addRating(
            @PathVariable Long medicineId,
            @RequestParam Double rating) {
        Medicine updatedMedicine = medicineService.addRating(medicineId, rating);
        if (updatedMedicine == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(updatedMedicine, HttpStatus.OK);
    }

}