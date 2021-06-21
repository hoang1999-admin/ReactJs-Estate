/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 11, 2021
 * @hour 10:51:42 PM
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

import com.estate.core.entity.Photo;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.PhotoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PhotoAdminController {
	@Autowired
	private PhotoRepository photoRepository;
	
	@GetMapping("/photoadmin")
	public List<Photo> getPhotoAll()
	{
		return photoRepository.findAll();
	}
	@GetMapping("/photoadmin/index={id}")
	public ResponseEntity<Photo> getPhoto(@PathVariable long id)
	{
		Photo photo = photoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Photo not with id: "+ id));
		return ResponseEntity.ok(photo);
	}
	@PostMapping("/photoadmin")
    Photo createPhoto(@Validated @RequestBody Photo photo){
        return photoRepository.save(photo);
    }

	// update Photo rest api
	
		@PutMapping("/photoadmin/index={id}")
		public ResponseEntity<Photo> updatePhoto(@PathVariable Long id, @RequestBody Photo photoDetails){
			Photo photo = photoRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Photo not exist with id :" + id));
			
			
			photo.setImageString(photoDetails.getImageString());
			photo.setTitleString(photoDetails.getTitleString());
			photo.setProductidLong(photoDetails.getProductidLong());
			photo.setTypeInteger(photoDetails.getTypeInteger());
			photo.setStatusInteger(photoDetails.getStatusInteger());
			
			
			Photo updatedPhoto = photoRepository.save(photo);
			return ResponseEntity.ok(updatedPhoto);
		}
		
		// delete Photo rest api
		@DeleteMapping("/photoadmin/index={id}")
		public ResponseEntity<Map<String, Boolean>> deletePhoto(@PathVariable Long id){
			Photo photo = photoRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Photo not exist with id :" + id));
			
			photoRepository.delete(photo);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}