package com.Tech_Sprint_48.Pharmacy_Service.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

@Service
public class GeocodingService {

    @Value("${google.maps.api.key}")
    private String apiKey;

    public Map<String, Object> getCoordinates(String address) {
        RestTemplate restTemplate = new RestTemplate();
        String encodedAddress = URLEncoder.encode(address, StandardCharsets.UTF_8);
        String GEOCODING_API_URL = "https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={apiKey}";
        String url = GEOCODING_API_URL.replace("{address}", encodedAddress).replace("{apiKey}", apiKey);

        Map response = restTemplate.getForObject(url, Map.class);

        if (response != null && "OK".equals(response.get("status"))) {
            List<Map<String, Object>> results = (List<Map<String, Object>>) response.get("results");
            if (results != null && !results.isEmpty()) {
                Map<String, Object> geometry = (Map<String, Object>) results.get(0).get("geometry");
                return (Map<String, Object>) geometry.get("location");
            }
        }
        return null;
    }
}