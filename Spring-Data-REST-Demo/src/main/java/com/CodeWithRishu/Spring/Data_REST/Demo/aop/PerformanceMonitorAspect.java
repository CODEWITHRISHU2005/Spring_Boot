package com.CodeWithRishu.Spring.Data_REST.Demo.aop;

import lombok.SneakyThrows;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class PerformanceMonitorAspect {

    // This is a performance monitoring aspect that can be used to monitor the performance of methods in a Spring application.
    // The aspect can be used to measure the time taken by methods to execute and log the performance metrics.
    // The aspect can be used to monitor the performance of methods in a Spring application.

    private static final Logger logger = LoggerFactory.getLogger(PerformanceMonitorAspect.class);

    @SneakyThrows
    @Around("execution(* com.CodeWithRishu.Spring.Data_REST.Demo.service.JobService.getJobById(..))")
    public Object logMethodExecutionTime(ProceedingJoinPoint jp) {
        // This method can be used to log the execution time of methods in a Spring application.

        long startTime = System.currentTimeMillis();
        Object obj = jp.proceed();
        long endTime = System.currentTimeMillis();

        long executionTime = endTime - startTime;
        logger.info("Method executed by {} in {} milliseconds", jp.getSignature().getName(), executionTime);

        return obj;
    }

}
