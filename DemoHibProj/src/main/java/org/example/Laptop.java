package org.example;

import jakarta.persistence.Cacheable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

// @Embeddable
@Entity
@Cacheable
public class Laptop {

    @Id
    private int lid;
    private String brand;
    private String model;
    private int ram;

//    @ManyToOne
//    @ManyToMany(mappedBy = "lap")
//    private List<Employee> emp;

    public Laptop() {
    }

    public Laptop(int lid, String brand, String model, int ram) {
        this.lid = lid;
        this.brand = brand;
        this.model = model;
        this.ram = ram;
    }

    public int getLid() {
        return lid;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public int getRam() {
        return ram;
    }

//        public List<Employee> getEmp() {
//        return emp;
//    }

    @Override
    public String toString() {
        return "Laptop{" +
                "lid=" + lid +
                ", brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", ram=" + ram +
                '}';
    }
}
