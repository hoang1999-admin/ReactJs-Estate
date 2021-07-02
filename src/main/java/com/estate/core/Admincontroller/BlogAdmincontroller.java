/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jul 2, 2021
 * @hour 3:01:01 PM
*/


package com.estate.core.Admincontroller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

import com.estate.core.entity.Blog;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.BlogRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BlogAdmincontroller {
	@Autowired
	private BlogRepository blogRepository;
	
	@GetMapping("/blogadmin")
	public List<Blog> getblogAll()
	{
		return blogRepository.findAll();
	}
	@GetMapping("/blogadminpage")
	public Page<Blog> getblogAllPage(Pageable pageable)
	{
		return blogRepository.findAll(pageable);
	}
	@GetMapping("/blogadmin/index={id}")
	public ResponseEntity<Blog> getblog(@PathVariable long id)
	{
		Blog blog = blogRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("blog not with id: "+ id));
		return ResponseEntity.ok(blog);
	}
	@PostMapping("/blogadmin")
	Blog createblog(@Validated @RequestBody Blog blog){
        return blogRepository.save(blog);
    }

	// update blog rest api
	
		@PutMapping("/blogadmin/index={id}")
		public ResponseEntity<Blog> updateblog(@PathVariable Long id, @RequestBody Blog blogDetails){
			Blog blog = blogRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("blog not exist with id :" + id));
			
			blog.setProductidLong(blogDetails.getProductidLong());
			blog.setCategoryidLong(blogDetails.getCategoryidLong());
			blog.setTitleString(blogDetails.getTitleString());
			blog.setDescriptionString(blogDetails.getDescriptionString());
			blog.setSlugString(blogDetails.getSlugString());
			blog.setMetakeyString(blogDetails.getMetakeyString());
			blog.setMetadescString(blogDetails.getMetadescString());
			blog.setPriceDouble(blogDetails.getPriceDouble());
			blog.setPositionString(blogDetails.getPositionString());
			blog.setCreatedatTimestamp(blogDetails.getCreatedatTimestamp());
			blog.setImageString(blogDetails.getImageString());
			blog.setAreaString(blogDetails.getAreaString());
			blog.setAddressString(blogDetails.getAddressString());
			blog.setPhoneString(blogDetails.getPhoneString());
			blog.setCustomerString(blogDetails.getCustomerString());
			
			blog.setStatusString(blogDetails.getStatusString());
			
			
			Blog updatedblog = blogRepository.save(blog);
			return ResponseEntity.ok(updatedblog);
		}
		
		// delete blog rest api
		@DeleteMapping("/blogadmin/index={id}")
		public ResponseEntity<Map<String, Boolean>> deleteblog(@PathVariable Long id){
			Blog blog = blogRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("blog not exist with id :" + id));
			
			blogRepository.delete(blog);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
