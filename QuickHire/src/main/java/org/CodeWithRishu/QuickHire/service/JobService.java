package org.CodeWithRishu.QuickHire.service;

import org.CodeWithRishu.QuickHire.model.JobPost;
import org.CodeWithRishu.QuickHire.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository repository;

    public void addJob(JobPost jobPost) {
        repository.addJob(jobPost);
    }

    public List<JobPost> getAllJobs() {
        return repository.getAllJobs();
    }
}
