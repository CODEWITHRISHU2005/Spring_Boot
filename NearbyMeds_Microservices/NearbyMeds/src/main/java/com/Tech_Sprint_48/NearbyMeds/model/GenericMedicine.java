package com.Tech_Sprint_48.NearbyMeds.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GenericMedicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long genericNameId;

    private String genericMedicine;

    @OneToMany(mappedBy = "genericMedicineName")
    private List<Medicine> medicines;
}