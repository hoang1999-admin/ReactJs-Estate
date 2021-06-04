/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 27, 2021
 * @hour 11:25:37 AM
*/


package com.estate.core.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estate.core.entity.ProductRelation;
import com.estate.core.repository.ProductRelationRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ProductRelationController {
	@Autowired
	private ProductRelationRepository productRelationRepository;
	
	@GetMapping("/productrelation")
	public List<ProductRelation> getListProductRelations()
	{
		return productRelationRepository.findAll();
	}

	@GetMapping("/productrelation/index={id}")
	public List<ProductRelation> getProductRelationId(@PathVariable long id)
	{
		return productRelationRepository.findByProductidLong(id);
				
	}
}
