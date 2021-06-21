/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 11, 2021
 * @hour 10:52:28 PM
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

import com.estate.core.entity.ProductRelation;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.ProductRelationRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ProductRelationAdminController {
	@Autowired
	private ProductRelationRepository productRelationRepository;
	
	@GetMapping("/productrelationadmin")
	public List<ProductRelation> getproductRelationAll()
	{
		return productRelationRepository.findAll();
	}
	@GetMapping("/productrelationadmin/index={id}")
	public ResponseEntity<ProductRelation> getproductRelation(@PathVariable long id)
	{
		ProductRelation productRelation = productRelationRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("productRelation not with id: "+ id));
		return ResponseEntity.ok(productRelation);
	}
	@PostMapping("/productrelationadmin")
    ProductRelation createproductRelation(@Validated @RequestBody ProductRelation productRelation){
        return productRelationRepository.save(productRelation);
    }

	// update productRelation rest api
	
		@PutMapping("/productrelationadmin/index={id}")
		public ResponseEntity<ProductRelation> updateproductRelation(@PathVariable Long id, @RequestBody ProductRelation productRelationDetails){
			ProductRelation productRelation = productRelationRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("productRelation not exist with id :" + id));
			
			productRelation.setProductrelationidLong(productRelationDetails.getProductrelationidLong());
			productRelation.setProductidLong(productRelationDetails.getProductidLong());
			productRelation.setStatusInteger(productRelationDetails.getStatusInteger());
			
			ProductRelation updatedproductRelation = productRelationRepository.save(productRelation);
			return ResponseEntity.ok(updatedproductRelation);
		}
		
		// delete productRelation rest api
		@DeleteMapping("/productrelationadmin/index={id}")
		public ResponseEntity<Map<String, Boolean>> deleteproductRelation(@PathVariable Long id){
			ProductRelation productRelation = productRelationRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("productRelation not exist with id :" + id));
			
			productRelationRepository.delete(productRelation);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
