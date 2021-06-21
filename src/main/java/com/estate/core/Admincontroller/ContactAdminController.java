/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 11, 2021
 * @hour 10:51:24 PM
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

import com.estate.core.entity.Contact;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.ContactRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ContactAdminController {
	@Autowired
	private ContactRepository contactRepository;
	
	@GetMapping("/contactadmin")
	public List<Contact> getcontactAll()
	{
		return contactRepository.findAll();
	}
	@GetMapping("/contactadmin/index={id}")
	public ResponseEntity<Contact> getcontact(@PathVariable long id)
	{
		Contact contact = contactRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("contact not with id: "+ id));
		return ResponseEntity.ok(contact);
	}
	@PostMapping("/contactadmin")
    Contact createcontact(@Validated @RequestBody Contact contact){
        return contactRepository.save(contact);
    }

	// update contact rest api
	
		@PutMapping("/contactadmin/index={id}")
		public ResponseEntity<Contact> updatecontact(@PathVariable Long id, @RequestBody Contact contactDetails){
			Contact contact = contactRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("contact not exist with id :" + id));
			
			
			contact.setImageString(contactDetails.getImageString());
			contact.setTitleString(contactDetails.getTitleString());
			contact.setDetailString(contactDetails.getDetailString());
			contact.setCreatedatTimestamp(contactDetails.getCreatedatTimestamp());
			contact.setPhoneString(contactDetails.getPhoneString());
			contact.setEmailString(contactDetails.getEmailString());
			contact.setFullnameString(contactDetails.getFullnameString());
			contact.setStatusInteger(contactDetails.getStatusInteger());
			
			
			Contact updatedcontact = contactRepository.save(contact);
			return ResponseEntity.ok(updatedcontact);
		}
		
		// delete contact rest api
		@DeleteMapping("/contactadmin/index={id}")
		public ResponseEntity<Map<String, Boolean>> deletecontact(@PathVariable Long id){
			Contact contact = contactRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("contact not exist with id :" + id));
			
			contactRepository.delete(contact);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}