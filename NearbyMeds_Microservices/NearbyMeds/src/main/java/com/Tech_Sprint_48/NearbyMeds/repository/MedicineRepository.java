package com.Tech_Sprint_48.NearbyMeds.repository;

import com.Tech_Sprint_48.NearbyMeds.model.Medicine;
import com.Tech_Sprint_48.NearbyMeds.model.Pharmacy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {
    List<Medicine> findByNameContainingIgnoreCase(String name);

    @Query("SELECT m FROM Medicine m JOIN m.pharmacies p WHERE p.pharmacyId = ?1")
    List<Medicine> searchMedicineByKeyword(String keyword);
}
