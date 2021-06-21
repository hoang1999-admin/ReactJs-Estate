/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 12, 2021
 * @hour 8:50:48 PM
*/


package com.estate.core.controller;

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

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class SliderController {

	@Autowired
	private SliderRepository sliderRepository;
//	get all
	@GetMapping("/slider")
	public List<Slider> getListsSliders()
	{
		return sliderRepository.findAll();
	}
//	get With id
	@GetMapping("/slider/{id}")
	public ResponseEntity<Slider> getSliderId(@PathVariable Long id)
	{
		Slider slider = sliderRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Slider not with id: "+id));
		return ResponseEntity.ok(slider);
	}
//	create slider
	@PostMapping("/slider")
	public Slider getSlider(@Validated @RequestBody Slider slider)
	{
		return sliderRepository.save(slider);
	}
//	update slider
	@PutMapping("/slider/{id}")
	public ResponseEntity<Slider> getSlider(@PathVariable Long id,@RequestBody Slider sliderdetail)
	{
		Slider slider = sliderRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("slider not with id: "+id));
		
		
		slider.setTitleString(sliderdetail.getTitleString());
		slider.setLinkString(sliderdetail.getLinkString());
		slider.setImageString(sliderdetail.getImageString());
		slider.setOrderInteger(sliderdetail.getOrderInteger());
		slider.setPositionString(sliderdetail.getPositionString());
		slider.setCreatedatTimestamp(sliderdetail.getCreatedatTimestamp());
		slider.setMetakeyString(sliderdetail.getMetakeyString());
		slider.setMetadescString(sliderdetail.getMetadescString());
		slider.setStatusInteger(sliderdetail.getStatusInteger());
		
		Slider sliderupdateSlider = sliderRepository.save(slider);
		return ResponseEntity.ok(sliderupdateSlider);
	}
//	delete slider
	@DeleteMapping("/slider")
	public ResponseEntity<Map<String, Boolean>> deleteSlider(@PathVariable Long id)
	{
		Slider slider = sliderRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("slider not with id:"+id));
		sliderRepository.delete(slider);
		Map<String,Boolean> responseMap = new HashMap<>();
		responseMap.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(responseMap);
		
	}
}
