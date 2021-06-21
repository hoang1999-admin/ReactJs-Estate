/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 11, 2021
 * @hour 10:53:14 PM
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

import com.estate.core.entity.Slider;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.SliderRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class SliderAdminController {
	@Autowired
	private SliderRepository sliderRepository;
	
	@GetMapping("/slideradmin")
	public List<Slider> getsliderAll()
	{
		return sliderRepository.findAll();
	}
	@GetMapping("/slideradmin/index={id}")
	public ResponseEntity<Slider> getslider(@PathVariable long id)
	{
		Slider slider = sliderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("slider not with id: "+ id));
		return ResponseEntity.ok(slider);
	}
	@PostMapping("/slideradmin")
    Slider createslider(@Validated @RequestBody Slider slider){
        return sliderRepository.save(slider);
    }

	// update slider rest api
	
		@PutMapping("/slideradmin/index={id}")
		public ResponseEntity<Slider> updateslider(@PathVariable Long id, @RequestBody Slider sliderDetails){
			Slider slider = sliderRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("slider not exist with id :" + id));
			
		
			slider.setImageString(sliderDetails.getImageString());
			slider.setTitleString(sliderDetails.getTitleString());
			slider.setCreatedatTimestamp(sliderDetails.getCreatedatTimestamp());
			slider.setLinkString(sliderDetails.getLinkString());
			slider.setMetadescString(sliderDetails.getMetadescString());
			slider.setMetakeyString(sliderDetails.getMetakeyString());
			slider.setOrderInteger(sliderDetails.getOrderInteger());
			slider.setPositionString(sliderDetails.getPositionString());
			slider.setStatusInteger(sliderDetails.getStatusInteger());
			
			Slider updatedslider = sliderRepository.save(slider);
			return ResponseEntity.ok(updatedslider);
		}
		
		// delete slider rest api
		@DeleteMapping("/slideradmin/index={id}")
		public ResponseEntity<Map<String, Boolean>> deleteslider(@PathVariable Long id){
			Slider slider = sliderRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("slider not exist with id :" + id));
			
			sliderRepository.delete(slider);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
