/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 11, 2021
 * @hour 10:53:31 PM
*/


package com.estate.core.Admincontroller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estate.core.entity.User;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserAdminController {
	@Autowired
	private UserRepository userServices;
	@Autowired
	PasswordEncoder encoder;
	
	@GetMapping("/useradmin")
	public List<User> getuserAll()
	{
		return userServices.findAll();
	}
	@GetMapping("/useradmin/index={id}")
	public ResponseEntity<User> getuser(@PathVariable long id)
	{
		User user = userServices.findById(id).orElseThrow(() -> new ResourceNotFoundException("user not with id: "+ id));
		return ResponseEntity.ok(user);
	}
	@PostMapping("/useradmin")
    User createuser(@Validated @RequestBody User user){
        return userServices.save(user);
    }

	// update user rest api
	
		@PutMapping("/useradmin/index={id}")
		public ResponseEntity<User> updateuser(@PathVariable Long id, @RequestBody User userDetails){
			User user = userServices.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
			
			
			user.setEmail(userDetails.getEmail());
			user.setPassword(encoder.encode(userDetails.getPassword()));
			user.setUsername(userDetails.getUsername());
		
			
			
			User updateduser = userServices.save(user);
			return ResponseEntity.ok(updateduser);
		}
		
		// delete user rest api
		@DeleteMapping("/useradmin/index={id}")
		public ResponseEntity<Map<String, Boolean>> deleteuser(@PathVariable Long id){
			User user = userServices.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
			
			userServices.delete(user);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}