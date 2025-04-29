package com.Tech_Sprint_48.Medicine.repository;

import com.Tech_Sprint_48.Medicine.model.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {

    @Query("SELECT m FROM Medicine m WHERE m.name LIKE %:keyword% OR m.description LIKE %:keyword%")
    List<Medicine> searchMedicineByKeyword(@Param("keyword") String keyword);

}
