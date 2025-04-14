package org.CodeWithRishu.Spring_Data_JPA;

import org.CodeWithRishu.Spring_Data_JPA.model.Student;
import org.CodeWithRishu.Spring_Data_JPA.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class SpringDataJpaApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(SpringDataJpaApplication.class, args);
        Student s1 = context.getBean(Student.class);
        Student s2 = context.getBean(Student.class);
        Student s3 = context.getBean(Student.class);

        StudentRepository repo = context.getBean(StudentRepository.class);

        // Create
//        s1.setRollNo(101);
//        s1.setName("Navin");
//        s1.setMarks(75);
//
//
//        s2.setRollNo(102);
//        s2.setName("Kiran");
//        s2.setMarks(80);
//
//
//        s3.setRollNo(103);
//        s3.setName("Harsh");
//        s3.setMarks(70);
//
//        repo.save(s1);
//        repo.save(s2);
//        repo.save(s3);

        // Read
//        System.out.println("All Students: " + repo.findAll());
//        System.out.println(repo.findById(101).orElse(null));

//        List<Student> studName = repo.findByName("Kiran");
//        studName.forEach(Student -> System.out.println(studName));
//
//        List<Student> studMark = repo.findByMarks(80);
//        studMark.forEach(Student -> System.out.println(studMark));

        // Update
//        s2.setMarks(85);
//        repo.save(s2);
//        s3.setMarks(75);
//        repo.save(s3);
//        System.out.println("Updated Student: " + repo.findById(102).orElse(null));
//        System.out.println("Updated Student: " + repo.findById(103).orElse(null));

        // Delete
//        repo.delete(s1);
    }
}