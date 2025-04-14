package com.SpringFramework;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("desk")
@Scope("prototype")
public class Desktop implements Computer {

    public Desktop() {
        System.out.println("Desktop object created");
    }

    @Override
    public void compile() {
        System.out.println("Compiling using Desktop");
    }
}
