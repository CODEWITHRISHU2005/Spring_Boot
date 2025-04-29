package com.Tech_Sprint_48.Price_Service.service;

import com.Tech_Sprint_48.Price_Service.repository.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PriceService {

    @Autowired
    private PriceRepository priceRepository;

    public String getPrice(Long medicineId, Long pharmacyId) {
        return priceRepository.findPriceByMedicineIdAndPharmacyId(medicineId, pharmacyId);
    }
}
