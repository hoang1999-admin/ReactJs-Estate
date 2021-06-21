/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 21, 2021
 * @hour 3:04:29 PM
*/


package com.estate.core.Admincontroller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

import com.estate.core.entity.User_Role;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.User_RoleRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class User_RoleAdminController {

	@Autowired
	private User_RoleRepository user_RoleRepository;
	
	@GetMapping("/user_roleadmin")
	public List<User_Role> findAll()
	{
		return user_RoleRepository.findAll();
	}
	
	@PostMapping("/user_roleadmin")
	public User_Role createUser_Role(@Validated @RequestBody User_Role user_Role)
	{
		return user_RoleRepository.save(user_Role);
	}
	
	@PutMapping("/user_roleadmin/index={id}")
	public ResponseEntity<User_Role> updateUser_Role(@PathVariable Long id , @RequestBody User_Role  user_Role )
	{
		User_Role role = user_RoleRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User_role not with id: "+ id));
		
		role.setRoleid(user_Role.getRoleid());
		role.setUserid(user_Role.getUserid());
		
		User_Role updateRole = user_RoleRepository.save(role);
		return ResponseEntity.ok(updateRole);
	}
	
	@DeleteMapping("/user_roleadmin/index={id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser_Role(@PathVariable Long id)
	{
		User_Role user_Role = user_RoleRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("User_Role not with id: "+ id));
		
		user_RoleRepository.delete(user_Role);
		HashMap<String, Boolean> updateUser_RoleHashMap = new HashMap<>();
		updateUser_RoleHashMap.put("delete",Boolean.TRUE);
		return ResponseEntity.ok(updateUser_RoleHashMap);
	}
	@DeleteMapping("/user_roleadmin")
	public void deleteUser_Role(@Validated @RequestBody User_Role user_Role)
	{
		
		 user_RoleRepository.delete(user_Role);
	}
}
