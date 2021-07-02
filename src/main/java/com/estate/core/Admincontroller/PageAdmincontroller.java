/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jul 2, 2021
 * @hour 3:03:42 PM
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

import com.estate.core.entity.Page;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.PageReponsitory;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PageAdmincontroller {
	@Autowired
	private PageReponsitory pageRepository;
	
	@GetMapping("/pageadmin")
	public List<Page> getpageAll()
	{
		return pageRepository.findAll();
	}
	
	@GetMapping("/pageadmin/index={id}")
	public ResponseEntity<Page> getpage(@PathVariable long id)
	{
		Page page = pageRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("page not with id: "+ id));
		return ResponseEntity.ok(page);
	}
	@PostMapping("/pageadmin")
    Page createpage(@Validated @RequestBody Page page){
        return pageRepository.save(page);
    }

	// update page rest api
	
		@PutMapping("/pageadmin/index={id}")
		public ResponseEntity<Page> updatepage(@PathVariable Long id, @RequestBody Page pageDetails){
			Page page = pageRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("page not exist with id :" + id));
			

			page.setCategoryidLong(pageDetails.getCategoryidLong());
			page.setTitleString(pageDetails.getTitleString());
			page.setDescriptionString(pageDetails.getDescriptionString());
			page.setSlugString(pageDetails.getSlugString());
			page.setCreatedatTimestamp(pageDetails.getCreatedatTimestamp());
			page.setImageString(pageDetails.getImageString());
			page.setStatusString(pageDetails.getStatusString());
			page.setImage1String(pageDetails.getImage1String());
			page.setDescription1String(pageDetails.getDescription1String());
			page.setImage2String(pageDetails.getImage2String());
			page.setDescription2String(pageDetails.getDescription2String());
			page.setImage3String(pageDetails.getImage3String());
			page.setDescription3String(pageDetails.getDescription3String());
			Page updatedpage = pageRepository.save(page);
			return ResponseEntity.ok(updatedpage);
		}
		
		// delete page rest api
		@DeleteMapping("/pageadmin/index={id}")
		public ResponseEntity<Map<String, Boolean>> deletepage(@PathVariable Long id){
			Page page = pageRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("page not exist with id :" + id));
			
			pageRepository.delete(page);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
