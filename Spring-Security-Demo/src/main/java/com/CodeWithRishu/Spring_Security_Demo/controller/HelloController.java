package com.CodeWithRishu.Spring_Security_Demo.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("hello")
    public String greet(HttpServletRequest rq) {
        return "Hello World" + " " + rq.getRequestedSessionId();
    }

    @GetMapping("about")
    public String about(HttpServletRequest request) {
        return "RISHABH " + request.getSession().getId();
    }
}
