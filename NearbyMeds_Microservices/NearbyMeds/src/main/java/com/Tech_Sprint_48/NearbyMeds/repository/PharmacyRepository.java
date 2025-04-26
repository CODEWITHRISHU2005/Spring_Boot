package com.Tech_Sprint_48.NearbyMeds.repository;

import com.Tech_Sprint_48.NearbyMeds.model.Pharmacy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PharmacyRepository extends JpaRepository<Pharmacy, Long> {

    @Query("SELECT p FROM Pharmacy p WHERE p.pharmacyId = ?1" +
           " AND (6371 * acos(cos(radians(?2)) * cos(radians(p.latitude))" +
           " * cos(radians(p.longitude) - radians(?3)) + sin(radians(?2))" +
           " * sin(radians(p.latitude)))) <= ?4")
    List<Pharmacy> findNearbyPharmacies(double latitude, double longitude, double radius);
}
