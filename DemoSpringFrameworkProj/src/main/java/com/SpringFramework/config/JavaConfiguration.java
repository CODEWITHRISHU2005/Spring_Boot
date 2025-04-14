package com.SpringFramework.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com.SpringFramework")
public class JavaConfiguration {

    // By default, the scope of a bean is singleton, which means that only one instance of the bean will be created
    // and shared across the application context. If you want to create a new instance of the bean every time it is requested,
    // you can use the @Scope annotation with the value "prototype". This will create a new instance of the bean every time it is requested.
    // The @Bean annotation is used to indicate that a method produces a bean to be managed by the Spring container.
    // The @Configuration annotation is used to indicate that the class can be used by the Spring IoC container as a source of bean definitions.
    // The @Scope annotation is used to specify the scope of the bean. The default scope is singleton, but you can also specify prototype, request, session, and globalSession scopes.

    // Creating autowire between employee and computer
//    @Bean(name = "emp")
//    public Employee employee(Computer com) {  // @Qualifier("desk")
//        Employee emp = new Employee();
//        emp.setAge(25);
//        emp.setCom(com);
//        return emp;
//    }
//
//    @Primary
//    @Bean(name = "lap")
//    public Laptop laptop() {
//        return new Laptop();
//    }
//
//    @Bean(name = "desk")
//    // @Scope("prototype")
//    public Desktop desktop() {
//        return new Desktop();
//    }

}
