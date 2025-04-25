package com.Tech_Sprint_48.NearbyMeds.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/prices")
public class PriceController {

    @GetMapping("/all)
    public ResponseEntity<String> getAllPrices() {
    }
}
