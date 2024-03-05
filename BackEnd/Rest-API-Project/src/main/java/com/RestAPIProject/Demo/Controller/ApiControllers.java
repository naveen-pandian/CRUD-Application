package com.RestAPIProject.Demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.RestAPIProject.Demo.models.User;
import com.RestAPIProject.Demo.repo.UserRepo;

@RestController
public class ApiControllers {
	
	@Autowired
	private UserRepo userRepo;
	
	@GetMapping(value = "/")
	public String getPage() {
		return "Welcome";
	}
	
	@GetMapping(value ="/users")
	public List<User> getUsers() {
		return userRepo.findAll();
	}
	
	@GetMapping(value="/users/{id}")
	public User getOne(@PathVariable long id) {
		return userRepo.findById(id).get();
	}
	
	@PostMapping(value ="/save")
	public String saveUser(@RequestBody User user) {
		userRepo.save(user);
		return "Saved...";		
	}
	
	@PutMapping(value = "/update/{id}")
	public String updateUser(@PathVariable long id, @RequestBody User user) {
		User u = userRepo.findById(id).get();
		u.setUsername(user.getUsername());
		u.setAge(user.getAge());
		u.setOccupation(user.getOccupation());
		userRepo.save(u);
		return "updated....";
	}
	@DeleteMapping( value = "/delete/{id}")
	public String deleteUser(@PathVariable long id)
	{
		User d = userRepo.findById(id).get();
		userRepo.delete(d);
		return "Delete user with id: "+id;
	
	}
}
