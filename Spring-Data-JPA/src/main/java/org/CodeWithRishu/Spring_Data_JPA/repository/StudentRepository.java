package org.CodeWithRishu.Spring_Data_JPA.repository;

import org.CodeWithRishu.Spring_Data_JPA.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    // This class is intentionally left empty. It extends BaseRepository to inherit the CRUD operations.
    // You can add custom query methods here if needed.

    // @Query(nativeQuery = true, value = "SELECT * FROM Student WHERE name = ?1")
    List<Student> findByName(String name);

    // @Query(nativeQuery = true, value = "SELECT * FROM Student WHERE marks = ?1")
    List<Student> findByMarks(int mark);

}
