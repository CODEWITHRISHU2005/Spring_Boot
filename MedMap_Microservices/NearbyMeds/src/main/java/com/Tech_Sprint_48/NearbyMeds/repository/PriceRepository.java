package com.Tech_Sprint_48.NearbyMeds.repository;

import com.Tech_Sprint_48.NearbyMeds.model.Price;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PriceRepository extends JpaRepository<Price, Long> {
    @Query("SELECT p.priceValue FROM Price p WHERE p.medicine.medicineId = ?1 AND p.pharmacy.pharmacyId = ?2")
    String findPriceByMedicineIdAndPharmacyId(Long medicineId, Long pharmacyId);
}
