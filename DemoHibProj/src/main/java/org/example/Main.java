package org.example;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

import java.util.List;

public class Main {
    public static void main(String[] args) {

//        Laptop l1 = new Laptop(1, "Asus", "Vivobook 15", 16);
//
//        Laptop l2 = new Laptop(2, "Dell", "Inspiron 14", 8);
//
//        Laptop l3 = new Laptop(3, "Apple", "Macbook Air", 8);
//
//        Employee e1 = new Employee(100, "Rohan", "Java", Arrays.asList(l1, l2));
//
//        Employee e2 = new Employee(101, "Sohan", "Python", List.of(l3));

//        Employee e3 = new Employee(102, "Rahul", "Kotlin", Arrays.asList(l1));

//        e1.setLap(Arrays.asList(l1, l2));
//        e2.setLap(List.of(l3));
//        e3.setLap(Arrays.asList(l1));

//        l1.setEmp(Arrays.asList(e1, e2));
//        l2.setEmp(Arrays.asList(e2, e3));
//        l3.setEmp(Arrays.asList(e2));

        SessionFactory sf = new Configuration()
                .configure("hibernate.cfg.xml")
//                .addAnnotatedClass(org.example.Employee.class)
                .addAnnotatedClass(org.example.Laptop.class)
                .buildSessionFactory();

        Session session = sf.openSession();

        // Create
//        Transaction transaction = session.beginTransaction();

        // Save the Laptop object to the database
//        session.persist(l1);
//        session.persist(l2);
//        session.persist(l3);

        // Save the Employee object to the database
//        session.persist(e1);
//        session.persist(e2);
//        session.persist(e3);

        // Commit the transaction
//       transaction.commit();

        // Read
//        Employee empDetail = session.get(Employee.class, 100);
//        // Print the fetched Employee object
//        if (empDetail != null)
//            System.out.println(empDetail);

        // Update
        // Transaction transaction = session.beginTransaction();
        // session.merge(s1);
        // transaction.commit();

        // Delete
        // s1 = session.get(Student.class, 69);
        // Transaction transaction = session.beginTransaction();
        // session.remove(s1);
        // transaction.commit();

//        Select * from laptop where ram=32 ->SQL
//        from Laptop where ram=32 -> HQL

        String brand = "Asus";
        Query query = session.createQuery("select brand, model from Laptop where brand like ?1");
        query.setParameter(1, brand);

        List<Object[]> laps = query.getResultList();

        for (Object[] data : laps) {
            System.out.println((String) data[0] + " : " + (String) data[1]);
        }

//        Laptop laptop = session.byId(Laptop.class).getReference(2);
        Laptop laptop = session.get(Laptop.class, 2);
        // Print the fetched Laptop object
        if (laptop != null)
            System.out.println(laptop);

        session.close(); // Close the session

        Session session2 = sf.openSession();
        // Read
        Laptop laptop2 = session2.get(Laptop.class, 2);
        // Print the fetched Laptop object
        if (laptop2 != null)
            System.out.println(laptop2);

        session2.close(); // Close the session
        sf.close(); // Close the SessionFactory
    }
}
