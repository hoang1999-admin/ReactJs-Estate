/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 18, 2021
 * @hour 7:39:22 PM
*/


package com.estate.core.Admincontroller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estate.core.entity.Email;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.EmailRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmailAminController {
	@Autowired
	private EmailRepository emailRepository;
	
	@GetMapping("/emailadmin")
	public List<Email> getListeEmails()
	{
		return emailRepository.findAll();
	}
	@GetMapping("/emailadmin/index={id}")
	public ResponseEntity<Email> getEmailId(@PathVariable long id)
	{
		Email email = emailRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("email not with id: "+id));
		return ResponseEntity.ok(email);
	}
	@PostMapping("/emailadmin")
	public Email creatEmail(@RequestBody Email email)
	{
		return emailRepository.save(email);
	}
	
	@PutMapping("/emailadmin/index={id}")
	public ResponseEntity<Email> updateEmail(@PathVariable long id,@RequestBody Email emailDetail)
	{
		Email email = emailRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("email not with id: "+id));
	
		email.setEmailString(emailDetail.getEmailString());
		email.setStatusInteger(emailDetail.getStatusInteger());
		
		
		Email emailupdatEmail = emailRepository.save(email);
		return ResponseEntity.ok(emailupdatEmail);
		
	}
	@DeleteMapping("/emailadmin/index={id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmail(@PathVariable long id)
	{
		Email email = emailRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("email not with id: "+id));
		emailRepository.delete(email);
		Map<String,Boolean> emailMap = new HashMap<>();
		emailMap.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(emailMap);
	}

}
