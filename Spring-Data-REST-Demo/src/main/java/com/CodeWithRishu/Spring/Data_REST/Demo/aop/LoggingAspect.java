package com.CodeWithRishu.Spring.Data_REST.Demo.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {

    // This is a simple logging aspect that logs method calls
    // using SLF4J. It can be used to log method calls in a Spring application.
    // The logger is created using the LoggerFactory and is used to log messages at different levels.
    // The logger is static and final, which means it is a singleton and cannot be changed.
    // The logger is created using the class name as the name of the logger.
    // This allows for easy identification of the source of the log messages.

    // The logger is used to log messages at different levels, such as info, debug, warn, and error.
    // The logger is used to log messages at the info level, which is used for informational messages that highlight the progress of the application.
    // The logger is used to log messages at the debug level, which is used for debugging messages that are useful for developers.
    // The logger is used to log messages at the warned level, which is used for warning messages that indicate a potential problem.
    // The logger is used to log messages at the error level, which is used for error messages that indicate a failure in the application.
    // The logger is used to log messages at the trace level, which is used for tracing messages that provide detailed information about the application.
    // The logger is used to log messages at the fatal level, which is used for fatal messages that indicate a serious failure in the application.
    // The logger is used to log messages at the off level, which is used to turn off logging.
    // The logger is used to log messages at the all level, which is used to log all messages.
    // The logger is used to log messages at the level specified by the user.

    private static final Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

    // execution method parameter -> return type, class-name.method-name(args)

    @Before("execution(* com.CodeWithRishu.Spring.Data_REST.Demo.service.JobService.getJobById(..)) || execution(* com.CodeWithRishu.Spring.Data_REST.Demo.service.JobService.updateJob(..))")
    public void logMethodCall(JoinPoint jp) {
        logger.info("Method called" + jp.getSignature().getName());
    }

    @After("execution(* com.CodeWithRishu.Spring.Data_REST.Demo.service.JobService.getJobById(..)) || execution(* com.CodeWithRishu.Spring.Data_REST.Demo.service.JobService.updateJob(..))")
    public void logMethodExecuted(JoinPoint jp) {
        logger.info("Method executed" + jp.getSignature().getName());
    }

    @AfterThrowing("execution(* com.CodeWithRishu.Spring.Data_REST.Demo.service.JobService.getJobById(..)) || execution(* com.CodeWithRishu.Spring.Data_REST.Demo.service.JobService.updateJob(..))")
    public void logMethodCrash(JoinPoint jp) {
        logger.info("Method has some issues" + jp.getSignature().getName());
    }

    @AfterReturning("execution(* com.CodeWithRishu.Spring.Data_REST.Demo.service.JobService.getJobById(..)) || execution(* com.CodeWithRishu.Spring.Data_REST.Demo.service.JobService.updateJob(..))")
    public void logMethodExecutedSuccess(JoinPoint jp) {
        logger.info("Method executed successfully" + jp.getSignature().getName());
    }

}
