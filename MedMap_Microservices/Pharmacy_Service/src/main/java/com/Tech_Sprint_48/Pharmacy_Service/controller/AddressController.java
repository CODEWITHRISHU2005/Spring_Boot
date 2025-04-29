package com.Tech_Sprint_48.Pharmacy_Service.controller;

import com.Tech_Sprint_48.Pharmacy_Service.service.GeocodingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AddressController {

    @Autowired
    private GeocodingService geocodingService;

    @GetMapping("/geocode")
    public Map<String, Object> geocodeAddress(@RequestParam String address) {
        return geocodingService.getCoordinates(address);
    }
}