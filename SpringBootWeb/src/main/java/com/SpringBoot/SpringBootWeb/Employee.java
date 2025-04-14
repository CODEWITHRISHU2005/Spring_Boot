package com.SpringBoot.SpringBootWeb;

public class Employee {

    private int Id;
    private String empName;

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "Id=" + Id +
                ", empName='" + empName + '\'' +
                '}';
    }

}