package com.example.SpringJDBC;

import com.example.SpringJDBC.model.Student;
import com.example.SpringJDBC.service.StudentService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class SpringJdbcApplication {

    public static void main(String[] args) {

        ApplicationContext context = SpringApplication.run(SpringJdbcApplication.class, args);

        Student student = context.getBean(Student.class);
        student.setRollNo(70);
        student.setName("Ishaan");
        student.setMarks(90);

        StudentService studentService = context.getBean(StudentService.class);
        studentService.addStudent(student);

        List<Student> students = studentService.getAllStudents();
        students.forEach(Student
                -> System.out.println("Roll No: " + Student.getRollNo() + ", Name: " + Student.getName() + ", Marks: " + Student.getMarks()));
    }

}

