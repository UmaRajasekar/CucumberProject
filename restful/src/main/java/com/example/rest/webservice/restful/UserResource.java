package com.example.rest.webservice.restful;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class UserResource {
	
	@Autowired
	public UserActions userActions;
	
	@RequestMapping(method=RequestMethod.GET,path="/retriveAllUser")
	public List<User> retrieveAllUsers(){
		return userActions.findAll();
	}
	
	@RequestMapping(method=RequestMethod.GET,path="/users/{id}")
	public User getUser(@PathVariable int id) {
		return userActions.findOne(id);
	}

}
