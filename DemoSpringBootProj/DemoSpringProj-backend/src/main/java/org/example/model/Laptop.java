package org.example.model;

import org.example.App;
import org.springframework.stereotype.Component;

@Component("lap")
// @Primary
public class Laptop implements App.Computer {

    @Override
    public void compile() {
        System.out.println("Compiling in Laptop");
    }

}