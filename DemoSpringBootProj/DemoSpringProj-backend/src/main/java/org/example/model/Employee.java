package org.example.model;

import org.example.App;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Employee {
    // If we have field and setter injection, setter injection will be used

    @Value("25")
    private int age;

    // Field injection
//     @Autowired
//     @Qualifier("lap")
    private App.Computer comp;

    // Constructor injection
//    @Autowired
//    public Employee(@Qualifier("desk") Computer comp, int age) {
//        this.comp = comp;
//        this.age = age;
//    }

    public int getAge() {
        return age;
    }


    public void setAge(int age) {
        this.age = age;
    }


    public App.Computer getComp() {
        return comp;
    }

    // Setter injection
    @Autowired
    @Qualifier("lap")
    public void setComp(App.Computer comp) {
        this.comp = comp;
    }

    public void code() {
        comp.compile();
    }
}
