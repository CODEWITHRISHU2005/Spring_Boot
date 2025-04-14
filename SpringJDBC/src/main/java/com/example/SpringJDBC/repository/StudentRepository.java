package com.example.SpringJDBC.repository;

import com.example.SpringJDBC.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StudentRepository {

    private JdbcTemplate jdbc;

    public void save(Student stud) {
        if (existsByRollNo(stud.getRollNo())) {
            System.out.println("Student with roll number " + stud.getRollNo() + " already exists.");
            return;
        }

        // Save to database
        String sql = "insert into student (roll_no, name, marks) values (?, ?, ?)";
        jdbc.update(sql, stud.getRollNo(), stud.getName(), stud.getMarks());
    }

    public boolean existsByRollNo(int rollNo) {
        String sql = "select count(*) from student where roll_no = ?";
        Integer count = jdbc.queryForObject(sql, new Object[]{rollNo}, Integer.class);
        return count != null && count > 0;
    }

    public List<Student> findAll() {
        String sql = "select * from student";
        return jdbc.query(sql, (rs, rowNum) -> {
            Student student = new Student();
            student.setRollNo(rs.getInt("roll_no"));
            student.setName(rs.getString("name"));
            student.setMarks(rs.getInt("marks"));
            return student;
        });
    }

    public JdbcTemplate getJdbc() {
        return jdbc;
    }

    @Autowired
    public void setJdbc(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

}
