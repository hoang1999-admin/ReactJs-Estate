/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 19, 2021
 * @hour 6:17:23 PM
*/


package com.estate.core.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
public class AreaController {

	@Autowired
	private AreaRepository areaRepository;
	@GetMapping("/area")
	public List<Area> getListaAreas()
	{
		return areaRepository.findAll();
	}
	@GetMapping("/area-top")
	public List<Area> getListaAreas8()
	{
		return areaRepository.findTopN(8);
	}
	@GetMapping("/area/index={id}")
	public ResponseEntity<Area> getAreaId(@PathVariable long id)
	{
		Area area = areaRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("area not with id: "+id));
		return ResponseEntity.ok(area);
	}
	@PostMapping("/area")
	public Area createArea(@RequestBody Area area)
	{
		return areaRepository.save(area);
	}
	@PutMapping("/area/index={id}")
	public ResponseEntity<Area> updateArea(@PathVariable long id,@RequestBody Area areaDetail)
	{
		Area area = areaRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("area not with id: "+id));
	
		area.setImageString(areaDetail.getImageString());
		area.setProductidLong(areaDetail.getProductidLong());
		area.setTitleString(areaDetail.getTitleString());
		area.setStatusInteger(areaDetail.getStatusInteger());
		
		areaRepository.save(area);
		return ResponseEntity.ok(area);
	}
	@DeleteMapping("/area/index={id}")
	public ResponseEntity<Map<String,Boolean>> deleteArea(@PathVariable long id)
	{
		Area area = areaRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("area not with id: "+id));
		areaRepository.delete(area);
		Map<String,Boolean> areaupdateMap = new HashMap<>();
		areaupdateMap.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(areaupdateMap);
	}
}
