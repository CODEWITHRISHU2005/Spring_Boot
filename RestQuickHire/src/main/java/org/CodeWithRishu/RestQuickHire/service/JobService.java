package org.CodeWithRishu.RestQuickHire.service;

import org.CodeWithRishu.RestQuickHire.model.JobPost;
import org.CodeWithRishu.RestQuickHire.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class JobService {

    @Autowired
    private final JobRepository repository;

    public JobService(JobRepository repository) {
        this.repository = repository;
    }

    public void addJob(JobPost jobPost) {
        repository.save(jobPost);
    }

    public List<JobPost> getAllJob() {
        return repository.findAll();
    }

    public JobPost getJobById(int id) {
        return repository.findById(id).orElse(null);
    }

    public void updateJob(JobPost jobPost) {
        repository.save(jobPost);
    }

    public void deleteJob(int id) {
        repository.deleteById(id);
    }

    public void load() {
        List<JobPost> jobs = new ArrayList<>(Arrays.asList(
                new JobPost(1, "Java Developer", "Must have good experience in core Java and advanced Java", 2,
                        List.of("Core Java", "J2EE", "Spring Boot", "Hibernate")),


                new JobPost(2, "Frontend Developer", "Experience in building responsive web applications using React", 3,
                        List.of("HTML", "CSS", "JavaScript", "React")),


                new JobPost(3, "Data Scientist", "Strong background in machine learning and data analysis", 4,
                        List.of("Python", "Machine Learning", "Data Analysis")),


                new JobPost(4, "Network Engineer", "Design and implement computer networks for efficient data communication", 5,
                        List.of("Networking", "Cisco", "Routing", "Switching")),


                new JobPost(5, "Mobile App Developer", "Experience in mobile app development for iOS and Android", 3,
                        List.of("iOS Development", "Android Development", "Mobile App"))
        ));
        repository.saveAll(jobs);
    }

    public List<JobPost> getJobByKeyword(String keyword) {
        return repository.findByPostProfileContainingOrPostDescContaining(keyword, keyword);
    }
}