package org.example.model;

import org.example.App;
import org.springframework.stereotype.Component;

@Component("desk")
// @Primary
public class Desktop implements App.Computer, Computer {

    @Override
    public void compile() {
        System.out.println("Compiling in Desktop");
    }

}