/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 19, 2021
 * @hour 10:23:41 AM
*/


package com.estate.core.controller;

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

import com.estate.core.entity.Request;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.RequestRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class RequestController {

	@Autowired
	private RequestRepository requestRepository;
	
	@GetMapping("/request")
	public List<Request> getListreRequests()
	{
		return requestRepository.findAll();
	}
	@GetMapping("/request/index={id}")
	public ResponseEntity<Request> getRequestId(@PathVariable long id)
	{
		Request request = requestRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("request not with id: "+id));
		return ResponseEntity.ok(request);
	}
	@PostMapping("/request")
	public Request postRequest(@RequestBody Request request)
	{
		return requestRepository.save(request);
	}
	@PutMapping("/request/index={id}")
	public ResponseEntity<Request> updateRequest(@PathVariable long id,@RequestBody Request requestDetail)
	{
		Request request = requestRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("request not with id: "+id));
		request.setIdLong(requestDetail.getIdLong());
		request.setSearchString(requestDetail.getSearchString());
		request.setQualityInteger(requestDetail.getQualityInteger());
		request.setAcreBoolean(requestDetail.getAcreBoolean());
		request.setTitleString(requestDetail.getTitleString());
		request.setStatusInteger(requestDetail.getStatusInteger());
		request.setPriceBoolean(requestDetail.getPriceBoolean());
		requestRepository.save(request);
		return ResponseEntity.ok(request);
	}
	@DeleteMapping("/request/index={id}")
	public ResponseEntity<Map<String,Boolean>> deleteRequest(@PathVariable long id)
	{
		Request request = requestRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("request not with id: "+id));
		requestRepository.delete(request);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
