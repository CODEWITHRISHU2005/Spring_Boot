package com.Tech_Sprint_48.NearbyMeds.repository;

import com.Tech_Sprint_48.NearbyMeds.model.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {
}
