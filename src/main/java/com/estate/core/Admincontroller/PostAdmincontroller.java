/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jul 2, 2021
 * @hour 3:03:24 PM
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

import com.estate.core.entity.Post;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.PostRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PostAdmincontroller {
	@Autowired
	private PostRepository postRepository;
	
	@GetMapping("/postadmin")
	public List<Post> getpostAll()
	{
		return postRepository.findAll();
	}
	
	@GetMapping("/postadmin/index={id}")
	public ResponseEntity<Post> getpost(@PathVariable long id)
	{
		Post post = postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("post not with id: "+ id));
		return ResponseEntity.ok(post);
	}
	@PostMapping("/postadmin")
	Post createpost(@Validated @RequestBody Post post){
        return postRepository.save(post);
    }

	// update post rest api
	
		@PutMapping("/postadmin/index={id}")
		public ResponseEntity<Post> updatepost(@PathVariable Long id, @RequestBody Post postDetails){
			Post post = postRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("post not exist with id :" + id));
			

			post.setCategoryidLong(postDetails.getCategoryidLong());
			post.setTitleString(postDetails.getTitleString());
			post.setDescriptionString(postDetails.getDescriptionString());
			post.setSlugString(postDetails.getSlugString());
			post.setCreatedatTimestamp(postDetails.getCreatedatTimestamp());
			post.setImageString(postDetails.getImageString());
			post.setStatusString(postDetails.getStatusString());
			post.setImage1String(postDetails.getImage1String());
			post.setDescription1String(postDetails.getDescription1String());
			post.setImage2String(postDetails.getImage2String());
			post.setDescription2String(postDetails.getDescription2String());
			post.setImage3String(postDetails.getImage3String());
			post.setDescription3String(postDetails.getDescription3String());
			Post updatedpost = postRepository.save(post);
			return ResponseEntity.ok(updatedpost);
		}
		
		// delete post rest api
		@DeleteMapping("/postadmin/index={id}")
		public ResponseEntity<Map<String, Boolean>> deletepost(@PathVariable Long id){
			Post post = postRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("post not exist with id :" + id));
			
			postRepository.delete(post);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
