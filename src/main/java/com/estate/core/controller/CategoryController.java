/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 9, 2021
 * @hour 11:42:52 PM
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

import com.estate.core.entity.Category;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.CategoryRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CategoryController {
	
	@Autowired
	private CategoryRepository categoryRepository;

	@GetMapping("/category")
	public List<Category> getListCategories()
	{
		return categoryRepository.findAll();
	}
	@GetMapping("/category-top")
	public List<Category> getListCategories7()
	{
		return categoryRepository.findTopN(7);
	}
	@GetMapping("/category-sale")
	public List<Category> getListSale()
	{
		return categoryRepository.findSale();
	}
	@GetMapping("/category-rent")
	public List<Category> getListRent()
	{
		return categoryRepository.findRent();
	}
	@GetMapping("/category-apply")
	public List<Category> getListApply()
	{
		return categoryRepository.findApply();
	}
	@GetMapping("/category-furnitureandexterior")
	public List<Category> getListFurnitureandexterior()
	{
		return categoryRepository.findFurnitureandexterior();
	}
	@GetMapping("/category-fengshui")
	public List<Category> getListFengShui()
	{
		return categoryRepository.findFengShui();
	}
	@GetMapping("/category-recruitment")
	public List<Category> getListRecruitment()
	{
		return categoryRepository.findRecruitment();
	}
	@GetMapping("/category-example")
	public List<Category> getListExample()
	{
		return categoryRepository.findExample();
	}
	@GetMapping("/category/index={categoryid}")
	public ResponseEntity<Category> getCategory(@PathVariable long categoryid)
	{
		Category category = categoryRepository.findById(categoryid).orElseThrow(() -> new ResourceNotFoundException("Category not with id: "+categoryid));
		return ResponseEntity.ok(category);
	}
	@PostMapping("/category")
    Category createCategory(@Validated @RequestBody Category Category){
        return categoryRepository.save(Category);
    }

	// update Category rest api
	
		@PutMapping("/category/{id}")
		public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody Category CategoryDetails){
			Category Category = categoryRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + id));
			
			Category.setParentidLong(CategoryDetails.getParentidLong());
			Category.setTitleString(CategoryDetails.getTitleString());
			Category.setSlugString(CategoryDetails.getSlugString());
			Category.setOrderLong(CategoryDetails.getOrderLong());
			Category.setMetakeyString(CategoryDetails.getMetakeyString());
			Category.setMetadescString(CategoryDetails.getMetadescString());
			Category.setCreatedatTimestamp(CategoryDetails.getCreatedatTimestamp());
			Category.setStatusString(CategoryDetails.getStatusString());
			
			
			Category updatedCategory = categoryRepository.save(Category);
			return ResponseEntity.ok(updatedCategory);
		}
		
		// delete Category rest api
		@DeleteMapping("/category/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable Long id){
			Category Category = categoryRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + id));
			
			categoryRepository.delete(Category);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
}
