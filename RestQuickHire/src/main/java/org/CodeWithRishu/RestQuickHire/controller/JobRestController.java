package org.CodeWithRishu.RestQuickHire.controller;

import org.CodeWithRishu.RestQuickHire.model.JobPost;
import org.CodeWithRishu.RestQuickHire.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class JobRestController {

    @Autowired
    private final JobService service;

    public JobRestController(JobService service) {
        this.service = service;
    }

    // Read
    // @RequestMapping(value = "jobPosts", method = RequestMethod.GET)
    @GetMapping(path = "jobPosts", produces = "application/json")
    // @ResponseBody
    public List<JobPost> getAllJob() {
        return service.getAllJob();
    }

    // Read
    // @RequestMapping(value = "jobPost/{id}", method = RequestMethod.GET)
    @GetMapping("jobPost/{id}")
    public JobPost getJobById(@PathVariable("id") int id) {
        return service.getJobById(id);
    }

    // Read
    @GetMapping("jobPosts/keyword/{keyword}")
    public List<JobPost> getJobByKeyword(@PathVariable("keyword") String keyword) {
        return service.getJobByKeyword(keyword);
    }

    // Create
    // @RequestMapping(value = "jobPost", method = RequestMethod.POST)
    @PostMapping(path = "jobPost", consumes = "application/json")
    public JobPost addJob(@RequestBody(required = true) JobPost jobPost) {
        service.addJob(jobPost);
        return service.getJobById(jobPost.getPostId());
    }

    // Update
    // @RequestMapping(value = "jobPost", method = RequestMethod.PUT)
    @PutMapping("jobPost")
    public JobPost updateJob(@RequestBody JobPost jobPost) {
        service.updateJob(jobPost);
        return service.getJobById(jobPost.getPostId());
    }

    // Delete
    // @RequestMapping(value = "jobPost/{id}", method = RequestMethod.DELETE)
    @DeleteMapping("jobPost/{id}")
    public void deleteJob(@PathVariable("id") int id) {
        service.deleteJob(id);
    }

    @GetMapping("load")
    public String load() {
        service.load();
        return "Load";
    }

}
