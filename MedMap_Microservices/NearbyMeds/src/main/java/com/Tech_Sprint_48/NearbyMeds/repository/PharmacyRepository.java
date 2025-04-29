package com.Tech_Sprint_48.NearbyMeds.repository;

import com.Tech_Sprint_48.NearbyMeds.model.Pharmacy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PharmacyRepository extends JpaRepository<Pharmacy, Long> {

    @Query(value = "SELECT p.*, " +
            "(6371 * acos(cos(radians(:latitude)) * cos(radians(p.latitude)) * " +
            "cos(radians(p.longitude) - radians(:longitude)) + sin(radians(:latitude)) * sin(radians(p.latitude)))) AS distance " +
            "FROM pharmacy p " +
            "HAVING distance < :radius " +
            "ORDER BY distance",
            nativeQuery = true)
    List<Pharmacy> findNearbyPharmacies(double latitude, double longitude, double radius);
}
