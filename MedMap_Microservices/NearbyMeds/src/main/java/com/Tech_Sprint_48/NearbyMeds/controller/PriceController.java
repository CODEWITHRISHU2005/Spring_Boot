package com.Tech_Sprint_48.NearbyMeds.controller;

import com.Tech_Sprint_48.NearbyMeds.service.PriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/prices")
public class PriceController {

    @Autowired
    private PriceService priceService;

    @GetMapping("{medicineId}/&{pharmacyId}")
    public ResponseEntity<String> getPrice(@RequestParam Long medicineId, @RequestParam Long pharmacyId) {
        String price = priceService.getPrice(medicineId, pharmacyId);
        if (price == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(price);
    }
}
