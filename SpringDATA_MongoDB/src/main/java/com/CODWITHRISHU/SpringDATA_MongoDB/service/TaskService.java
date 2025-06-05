package com.CODWITHRISHU.SpringDATA_MongoDB.service;

import com.CODWITHRISHU.SpringDATA_MongoDB.model.Task;
import com.CODWITHRISHU.SpringDATA_MongoDB.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repo;

    // CRUD -> Create, Read, Update, Delete

    // CREATE
    public Task createTask(Task task) {
        task.setTaskId(UUID.randomUUID().toString().split("-")[0]);
        return repo.save(task);
    }

    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    public Task getTaskById(String taskId) {
        return repo.findById(taskId).orElse(null);
    }

    public List<Task> getTasksBySeverity(int severity) {
        return repo.findBySeverity(severity);
    }

    public List<Task> getTasksByAssignee(String assignee) {
        return repo.getTasksByAssignee(assignee);
    }

    // UPDATE
    public Task updateTask(Task task) throws RuntimeException {
        if (repo.existsById(task.getTaskId())) {
            task.setDescription(task.getDescription());
            task.setSeverity(task.getSeverity());
            task.setAssignee(task.getAssignee());
            task.setStoryPoint(task.getStoryPoint());
            return repo.save(task);
        } else {
            throw new RuntimeException("Task not found with id: " + task.getTaskId());
        }
    }

    // DELETE
    public String deleteTask(String taskId) {
        if (repo.existsById(taskId)) {
            repo.deleteById(taskId);
        } else {
            throw new RuntimeException("Task not found with id: " + taskId);
        }

        return "Task deleted successfully with id: " + taskId;
    }
}