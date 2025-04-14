package com.SpringFramework;

import com.SpringFramework.config.JavaConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {
    public static void main(String[] args) {

        // In the above code we are using Java configuration to create a bean
        // and inject it into the container. The container is created using the
        // AnnotationConfigApplicationContext class.

        ApplicationContext context = new AnnotationConfigApplicationContext(JavaConfiguration.class); // create a container

        Employee emp = context.getBean(Employee.class);
        emp.coding();
        System.out.println(emp.getAge());

//        Desktop desk = context.getBean("desk", Desktop.class);
//        desk.compile();
//
//        Desktop desk2 = context.getBean("desk", Desktop.class);
//        desk2.compile();

        // In the bean tag in the file spring.xml how many times bean tag is written that much time it
        // creates a object inside container:-

//        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml"); // create a container
//        Employee emp = context.getBean("emp", Employee.class);
//        // emp.setAge(25);
//        emp.coding();
//        System.out.println(emp.getAge());

//        Employee emp2 = context.getBean("emp2", Employee.class);
//        emp2.age = 19;
//        emp2.coding();
//        System.out.println(emp2.age);

//        Laptop laptop = (Laptop) context.getBean("laptop");
//        Desktop desktop = context.getBean(Desktop.class);
//        Computer computer = context.getBean(Computer.class);
    }
}