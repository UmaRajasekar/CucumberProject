package com.example.rest.webservice.restful;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
	
	@RequestMapping(method=RequestMethod.GET,path="/hello")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path="/helloBean")
	public HelloBean helloBean() {
		return new HelloBean("Hello World, I am a bean");
	}
	
	@RequestMapping(method=RequestMethod.GET,path="/hello/{variable}")
	public String helloWorld(@PathVariable String variable) {
		return "Hello World, I am a "+ variable;
	}

}
