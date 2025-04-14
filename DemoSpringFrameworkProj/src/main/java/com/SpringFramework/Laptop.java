package com.SpringFramework;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class Laptop implements Computer {

    // If a battle between two beans having one has @Primary and other has @Qualifier then @Qualifier will be preferred

    public Laptop() {
        System.out.println("Laptop object created");
    }

    @Override
    public void compile() {
        System.out.println("Compiling using Laptop");
    }
}