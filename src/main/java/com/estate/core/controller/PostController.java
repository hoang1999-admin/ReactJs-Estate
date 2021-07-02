/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jul 2, 2021
 * @hour 9:53:24 AM
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

import com.estate.core.entity.Post;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.PostRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PostController {
	@Autowired
	private PostRepository postRepository;
	@GetMapping("/posts")
	public List<Post> getListPagePosts()
	{
		return postRepository.findAll();
	}
	@GetMapping("/posts1")
	public List<Post> getListPagePosts1()
	{
		return postRepository.findsale();
	}
	@GetMapping("/posts2")
	public List<Post> getListPagePosts2()
	{
		return postRepository.findartiher();
	}
	@GetMapping("/posts3")
	public List<Post> getListPagePosts3()
	{
		return postRepository.findhome();
	}
	@GetMapping("/posts4")
	public List<Post> getListPagePosts4()
	{
		return postRepository.findfend();
	}
	@GetMapping("/posts5")
	public List<Post> getListPagePosts5()
	{
		return postRepository.findexpen();
	}
	
	@GetMapping("/posts6")
	public List<Post> getListPagePosts6()
	{
		return postRepository.findbuld();
	}
	@GetMapping("/posts/index={id}")
	public ResponseEntity<Post> getPostsId(@PathVariable Long id)
	{
		Post post = postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("post with not id: "+ id));
		return ResponseEntity.ok(post);
	}
}
