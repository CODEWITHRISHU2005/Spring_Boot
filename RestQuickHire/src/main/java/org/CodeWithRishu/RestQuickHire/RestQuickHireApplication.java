package org.CodeWithRishu.RestQuickHire;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestQuickHireApplication {

	public static void main(String[] args) {

		// jackson library is used to convert Java objects to JSON and vice versa
		// it only works neither with the @RestController nor json data ,
		// neither with @Controller nor @ResponseBody and xml data.

		// @EnableWebMvc is used to enable Spring MVC features
		// @SpringBootApplication is a convenience annotation that adds:
		// @Configuration, @EnableAutoConfiguration, and @ComponentScan annotations
		// @EnableAutoConfiguration is used to enable Spring Boot's auto-configuration feature
		// @ComponentScan is used to scan for Spring components in the specified package
		// @Configuration is used to indicate that the class can be used by the Spring IoC container as a source of bean definitions
		// @Controller is used to indicate that the class is a Spring MVC controller
		// @ResponseBody is used to indicate that the return value of the method should be used as the response body
		// @RequestMapping is used to map HTTP requests to handler methods
		// @GetMapping is a shortcut for @RequestMapping(method = RequestMethod.GET)
		// @PostMapping is a shortcut for @RequestMapping(method = RequestMethod.POST)
		// @PutMapping is a shortcut for @RequestMapping(method = RequestMethod.PUT)
		// @DeleteMapping is a shortcut for @RequestMapping(method = RequestMethod.DELETE)
		// @CrossOrigin is used to allow cross-origin requests
		// @CrossOrigin(origins = "http://localhost:3000") is used to allow cross-origin requests from the specified origin

		// @RestController is a convenience annotation that combines @Controller and @ResponseBody

		SpringApplication.run(RestQuickHireApplication.class, args);
	}

}
