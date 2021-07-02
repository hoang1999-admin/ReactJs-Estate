/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jul 2, 2021
 * @hour 12:48:43 AM
*/


package com.estate.core.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estate.core.entity.Blog;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.BlogRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BlogController {
	
	@Autowired
	private BlogRepository blogRepository;
	
	@GetMapping("/blogs")
	public List<Blog> getListPageProducts()
	{
		return blogRepository.findAll();
	}
	@GetMapping("/blogs/index={id}")
	public ResponseEntity<Blog> getBlogsId(@PathVariable Long id)
	{
		Blog blog = blogRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("blog with not id: "+ id));
		return ResponseEntity.ok(blog);
	}
}
