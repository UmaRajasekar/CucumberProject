package com.example.rest.webservice.restful;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class UserActions {
	private static List<User> users=new ArrayList<User>();
	private static int userCount=3;
	
	static {
		users.add(new User(1, "Uma",new Date()));
		users.add(new User(2, "Rajasekar",new Date()));
		users.add(new User(3, "Madhavan",new Date()));
	}
	
	public List<User> findAll(){
		return users;
	}
	
	public User save(User user) {
		if(String.valueOf(user.getId()).equals(null)) {
			user.setId(userCount++);
		}
		users.add(user);
		return user;
	}
	
	public User findOne(int id) {
		for (User user : users) {
			if(user.getId()==id) {
				return user;
			}
		}
		return null;
	}
}
