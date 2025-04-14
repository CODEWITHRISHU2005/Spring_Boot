package com.SpringFramework;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Employee {

    @Value("25")
    private int age;

    // Field Injection
    @Autowired
    @Qualifier("desk")
    private Computer com;

    public Employee() {
        System.out.println("Employee object created");
    }

    // Constructor Injection
    // @Autowired
    public Employee(int age, Computer com) {
        System.out.println("Employee constructor called");
        this.age = age;
        this.com = com;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        System.out.println("setAge method called");
        this.age = age;
    }

    public Computer getCom() {
        return com;
    }

    // Setter Injection
    @Autowired
    public void setCom(Computer com) {
        System.out.println("setCom method called");
        this.com = com;
    }

    public void coding() {
        System.out.println("Coding");
        com.compile();
    }
}