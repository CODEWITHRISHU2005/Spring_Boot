package com.CodeWithRishu.Spring.Data_REST.Demo.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class ValidationAspect {

    private static final Logger logger = LoggerFactory.getLogger(ValidationAspect.class);

    // This is a validation aspect that can be used to validate the input parameters of methods in a Spring application.
    // The aspect can be used to validate the input parameters of methods in a Spring application.

    @Around("execution(* com.CodeWithRishu.Spring.Data_REST.Demo.service.JobService.getJobById(..)) && args(postId)")
    public Object validateInputParameters(ProceedingJoinPoint jp, int postId) {

        if(postId <= 0) {
            logger.error("Invalid postId: {}", postId);
            throw new IllegalArgumentException("postId must be greater than 0");
        }
        try {
            return jp.proceed(new Object[]{postId});
        } catch (Throwable throwable) {
            logger.error("Error occurred while executing method: {}", jp.getSignature().getName(), throwable);
            throw new RuntimeException("Method execution failed", throwable);
        }

    }
}
