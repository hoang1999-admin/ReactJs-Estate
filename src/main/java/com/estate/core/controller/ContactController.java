/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 16, 2021
 * @hour 10:14:40 PM
*/


package com.estate.core.controller;

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

import com.estate.core.entity.Contact;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.ContactRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ContactController {
	@Autowired
	private ContactRepository contactRepository;
	
	@GetMapping("/contact")
	public List<Contact> getListContacts()
	{
		return contactRepository.findAll();
	}
	
	@GetMapping("/contact/index={id}")
	public ResponseEntity<Contact> getContactId(@PathVariable long id)
	{
		Contact contact = contactRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("contact not with id: "+ id));
		return ResponseEntity.ok(contact);
	}

	@PostMapping("/contact")
	public Contact CreateContact( @RequestBody Contact contact)
	{
		return contactRepository.save(contact);
	}
	@PutMapping("/contact/index={id}")
	public ResponseEntity<Contact> getContactUpdate(@PathVariable long id,@Validated @RequestBody Contact contactdetail)
	{
		Contact contact = contactRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("contact not with id: "+id));
		contact.setIdLong(contactdetail.getIdLong());
		contact.setTitleString(contactdetail.getTitleString());
		contact.setFullnameString(contactdetail.getFullnameString());
		contact.setDetailString(contactdetail.getDetailString());
		contact.setEmailString(contactdetail.getEmailString());
		contact.setImageString(contactdetail.getImageString());
		contact.setPhoneString(contactdetail.getPhoneString());
		contact.setCreatedatTimestamp(contactdetail.getCreatedatTimestamp());
		contact.setStatusInteger(contactdetail.getStatusInteger());
		Contact contactUpdate = contactRepository.save(contact);
		
		return ResponseEntity.ok(contactUpdate);
	}
	@DeleteMapping("/contact/index={id}")
	public ResponseEntity<Map<String, Boolean>> deleteContact(@PathVariable long id)
	{
		Contact contact = contactRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("contact not with id: "+id));
		contactRepository.delete(contact);
		Map<String, Boolean> contactdeleteMap = new HashMap<>();
		contactdeleteMap.put("deleted",Boolean.TRUE);
		
		return ResponseEntity.ok(contactdeleteMap);
	}
}
