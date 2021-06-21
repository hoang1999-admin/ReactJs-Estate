/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 11, 2021
 * @hour 10:53:02 PM
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

import com.estate.core.entity.Role;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.RoleRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class RoleAdminController {
	@Autowired
	private RoleRepository roleRepository;
	
	@GetMapping("/roleadmin")
	public List<Role> getroleAll()
	{
		return roleRepository.findAll();
	}
	@GetMapping("/roleadmin/index={id}")
	public ResponseEntity<Role> getrole(@PathVariable long id)
	{
		Role role = roleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("role not with id: "+ id));
		return ResponseEntity.ok(role);
	}
	@PostMapping("/roleadmin")
    Role createrole(@Validated @RequestBody Role role){
        return roleRepository.save(role);
    }

	// update role rest api
	
		@PutMapping("/roleadmin/index={id}")
		public ResponseEntity<Role> updaterole(@PathVariable Long id, @RequestBody Role roleDetails){
			Role role = roleRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("role not exist with id :" + id));
			
		
			role.setName(roleDetails.getName());
			role.setStatus(roleDetails.getStatus());
			
			Role updatedrole = roleRepository.save(role);
			return ResponseEntity.ok(updatedrole);
		}
		
		// delete role rest api
		@DeleteMapping("/roleadmin/index={id}")
		public ResponseEntity<Map<String, Boolean>> deleterole(@PathVariable Long id){
			Role role = roleRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("role not exist with id :" + id));
			
			roleRepository.delete(role);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}