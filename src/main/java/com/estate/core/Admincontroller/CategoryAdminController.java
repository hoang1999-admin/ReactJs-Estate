/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 11, 2021
 * @hour 10:51:04 PM
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

import com.estate.core.entity.Category;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.CategoryRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CategoryAdminController {
	@Autowired
	private CategoryRepository categoryRepository;

	@GetMapping("/categoryadmin")
	public List<Category> getcategoryAll() {
		return categoryRepository.findAll();
	}

	@GetMapping("/categoryadmin/index={id}")
	public ResponseEntity<Category> getcategory(@PathVariable long id) {
		Category category = categoryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("category not with id: " + id));
		return ResponseEntity.ok(category);
	}

	@PostMapping("/categoryadmin")
	Category createcategory(@Validated @RequestBody Category category) {
		return categoryRepository.save(category);
	}

	// update category rest api

	@PutMapping("/categoryadmin/index={id}")
	public ResponseEntity<Category> createcategory(@PathVariable Long id, @RequestBody Category categorydetail) {
		Category category = categoryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("category with not id: " + id));
	
		category.setTitleString(categorydetail.getTitleString());
		category.setSlugString(categorydetail.getSlugString());
		category.setOrderLong(categorydetail.getOrderLong());
		category.setMetakeyString(categorydetail.getMetakeyString());
		category.setMetadescString(categorydetail.getMetadescString());
		category.setCreatedatTimestamp(categorydetail.getCreatedatTimestamp());
		category.setMaincontainerBoolean(categorydetail.getMaincontainerBoolean());
		category.setDealcontainerBoolean(categorydetail.getDealcontainerBoolean());
		category.setContainer1Boolean(categorydetail.getContainer1Boolean());
		category.setContainer2Boolean(categorydetail.getContainer2Boolean());
		category.setRequestcontainerBoolean(categorydetail.getRequestcontainerBoolean());
		category.setServicecontainerBoolean(categorydetail.getServicecontainerBoolean());
		category.setItemcontainerBoolean(categorydetail.getItemcontainerBoolean());
		category.setRegioncontainerBoolean(categorydetail.getRegioncontainerBoolean());
		category.setStatusString(categorydetail.getStatusString());

		Category categoryupdateCategory = categoryRepository.save(category);
		return ResponseEntity.ok(categoryupdateCategory);
	}

	// delete category rest api
	@DeleteMapping("/categoryadmin/index={id}")
	public ResponseEntity<Map<String, Boolean>> deletecategory(@PathVariable Long id) {
		Category category = categoryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("category not exist with id :" + id));

		categoryRepository.delete(category);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}