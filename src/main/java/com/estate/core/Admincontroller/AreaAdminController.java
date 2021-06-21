/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 11, 2021
 * @hour 10:50:36 PM
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

import com.estate.core.entity.Area;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.AreaRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class AreaAdminController {
	
	@Autowired
	private AreaRepository areaRepository;
	
	@GetMapping("/areaadmin")
	public List<Area> getareaAll()
	{
		return areaRepository.findAll();
	}
	@GetMapping("/areaadmin/index={id}")
	public ResponseEntity<Area> getarea(@PathVariable long id)
	{
		Area area = areaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("area not with id: "+ id));
		return ResponseEntity.ok(area);
	}
	@PostMapping("/areaadmin")
    Area createarea(@Validated @RequestBody Area area){
        return areaRepository.save(area);
    }

	// update area rest api
	
		@PutMapping("/areaadmin/index={id}")
		public ResponseEntity<Area> updatearea(@PathVariable Long id, @RequestBody Area areaDetails){
			Area area = areaRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("area not exist with id :" + id));
			
		
			area.setImageString(areaDetails.getImageString());
			area.setTitleString(areaDetails.getTitleString());
			area.setProductidLong(areaDetails.getProductidLong());
			area.setStatusInteger(areaDetails.getStatusInteger());
			
			Area updatedarea = areaRepository.save(area);
			return ResponseEntity.ok(updatedarea);
		}
		
		// delete area rest api
		@DeleteMapping("/areaadmin/index={id}")
		public ResponseEntity<Map<String, Boolean>> deletearea(@PathVariable Long id){
			Area area = areaRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("area not exist with id :" + id));
			
			areaRepository.delete(area);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
