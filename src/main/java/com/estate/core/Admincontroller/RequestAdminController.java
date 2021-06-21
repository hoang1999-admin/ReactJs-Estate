/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 11, 2021
 * @hour 10:52:50 PM
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

import com.estate.core.entity.Request;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.RequestRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class RequestAdminController {
	@Autowired
	private RequestRepository requestRepository;
	
	@GetMapping("/requestadmin")
	public List<Request> getrequestAll()
	{
		return requestRepository.findAll();
	}
	@GetMapping("/requestadmin/index={id}")
	public ResponseEntity<Request> getrequest(@PathVariable long id)
	{
		Request request = requestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("request not with id: "+ id));
		return ResponseEntity.ok(request);
	}
	@PostMapping("/requestadmin")
    Request createrequest(@Validated @RequestBody Request request){
        return requestRepository.save(request);
    }

	// update request rest api
	
		@PutMapping("/requestadmin/index={id}")
		public ResponseEntity<Request> updaterequest(@PathVariable Long id, @RequestBody Request requestDetails){
			Request request = requestRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("request not exist with id :" + id));
			
			
			request.setAcreBoolean(requestDetails.getAcreBoolean());
			request.setTitleString(requestDetails.getTitleString());
			request.setPriceBoolean(requestDetails.getPriceBoolean());
			request.setQualityInteger(requestDetails.getQualityInteger());
			request.setSearchString(requestDetails.getSearchString());
			request.setStatusInteger(requestDetails.getStatusInteger());
			
			Request updatedrequest = requestRepository.save(request);
			return ResponseEntity.ok(updatedrequest);
		}
		
		// delete request rest api
		@DeleteMapping("/requestadmin/index={id}")
		public ResponseEntity<Map<String, Boolean>> deleterequest(@PathVariable Long id){
			Request request = requestRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("request not exist with id :" + id));
			
			requestRepository.delete(request);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}