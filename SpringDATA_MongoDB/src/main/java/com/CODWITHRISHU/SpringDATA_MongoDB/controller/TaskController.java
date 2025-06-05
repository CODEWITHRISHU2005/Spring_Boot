package com.CODWITHRISHU.SpringDATA_MongoDB.controller;

import com.CODWITHRISHU.SpringDATA_MongoDB.model.Task;
import com.CODWITHRISHU.SpringDATA_MongoDB.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping("/createTask")
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Task createdTask = taskService.createTask(task);
        return ResponseEntity.ok(createdTask);
    }

    @GetMapping("/getAllTasks")
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> tasks = taskService.getAllTasks();
        return ResponseEntity.ok(tasks);
    }

    @GetMapping("/getTaskById/{taskId}")
    public ResponseEntity<Task> getTaskById(@PathVariable String taskId) {
        Task task = taskService.getTaskById(taskId);
        if (task != null) {
            return ResponseEntity.ok(task);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getTasksBySeverity/{severity}")
    public ResponseEntity<List<Task>> getTasksBySeverity(@PathVariable int severity) {
        List<Task> tasks = taskService.getTasksBySeverity(severity);
        return ResponseEntity.ok(tasks);
    }

    @GetMapping("/getTasksByAssignee/{assignee}")
    public ResponseEntity<Task> getTasksByAssignee(@PathVariable String assignee) {
        List<Task> tasks = taskService.getTasksByAssignee(assignee);
        return ResponseEntity.ok((Task) tasks);
    }

    @PutMapping("/updateTask")
    public ResponseEntity<Task> updateTask(@RequestBody Task task) {
        try {
            Task updatedTask = taskService.updateTask(task);
            return ResponseEntity.ok(updatedTask);
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(null);
        }
    }
}