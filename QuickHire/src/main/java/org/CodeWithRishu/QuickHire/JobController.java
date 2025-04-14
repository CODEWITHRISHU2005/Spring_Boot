package org.CodeWithRishu.QuickHire;

import org.CodeWithRishu.QuickHire.model.JobPost;
import org.CodeWithRishu.QuickHire.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class JobController {

    @Autowired
    private JobService service;

    // Read
    @GetMapping({"/", "home"})
    public String home() {
        return "home";
    }

    // Read
    @GetMapping("addjob")
    public String addJob() {
        return "addjob";
    }

    // Create
    @PostMapping("handleForm")
    public String handleForm(JobPost jobPost) {
        service.addJob(jobPost);
        return "success";
    }

    // Read
    @GetMapping("viewalljob")
    public String viewJobs(Model model) {
        List<JobPost> jobs = service.getAllJobs();
        model.addAttribute("jobPosts", jobs);

        return "viewalljob";
    }

}