package com.estate.core.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estate.core.entity.PageDetail;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.PageDetailRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PageDetailController {
	@Autowired
	private PageDetailRepository pageDetailRepository;
	@GetMapping("/pagedetails")
	public List<PageDetail> getListPagepages()
	{
		return pageDetailRepository.findAll();
	}
	@GetMapping("/pagedetails/index={id}")
	public ResponseEntity<PageDetail> getPagesId(@PathVariable Long id)
	{
		PageDetail pageDetail = pageDetailRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("pagedetails with not id: "+ id));
		return ResponseEntity.ok(pageDetail);
	}
}
