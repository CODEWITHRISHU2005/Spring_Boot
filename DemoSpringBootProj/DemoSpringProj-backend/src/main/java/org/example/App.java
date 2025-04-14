package org.example;

import org.example.model.Employee;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class App {

    public static void main(String[] args) {

        ApplicationContext context = SpringApplication.run(App.class, args);

        Employee emp = context.getBean(Employee.class);
        System.out.println(emp.getAge());
        emp.code();
    }

    public static interface Computer {
        void compile();
    }
}

