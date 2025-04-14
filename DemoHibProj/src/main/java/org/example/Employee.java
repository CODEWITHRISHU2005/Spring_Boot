package org.example;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
// @Table(name = "SWE")
public class Employee {

    @Id
    @Column(name = "empId")
    private int eId;

    @Column(name = "empName")
    private String eName;

    @Column(name = "empTech")
    // @Transient
    private String eTech;

    // @OneToOne
    // @OneToMany(mappedBy = "emp")
    @OneToMany(fetch = jakarta.persistence.FetchType.EAGER)
    // @ManyToMany
    private List<Laptop> lap;

    public Employee() {
    }

    public Employee(int eId, String eName, String eTech, List<Laptop> lap) {
        this.eId = eId;
        this.eName = eName;
        this.eTech = eTech;
        this.lap = lap;
    }

    public List<Laptop> getLap() {
        return lap;
    }

    public String geteTech() {
        return eTech;
    }

    public String geteName() {
        return eName;
    }

    public int geteId() {
        return eId;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "eId=" + eId +
                ", eName='" + eName + '\'' +
                ", eTech='" + eTech + '\'' +
                ", lap=" + lap +
                '}';
    }
}
