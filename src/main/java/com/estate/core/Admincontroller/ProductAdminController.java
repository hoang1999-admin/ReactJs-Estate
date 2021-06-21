/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 11, 2021
 * @hour 10:51:55 PM
*/


package com.estate.core.Admincontroller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

import com.estate.core.entity.Product;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ProductAdminController {
	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping("/productadmin")
	public List<Product> getProductAll()
	{
		return productRepository.findAll();
	}
	@GetMapping("/productadminpage")
	public Page<Product> getProductAllPage(Pageable pageable)
	{
		return productRepository.findAll(pageable);
	}
	@GetMapping("/productadmin/index={id}")
	public ResponseEntity<Product> getProduct(@PathVariable long id)
	{
		Product Product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not with id: "+ id));
		return ResponseEntity.ok(Product);
	}
	@PostMapping("/productadmin")
    Product createProduct(@Validated @RequestBody Product product){
        return productRepository.save(product);
    }

	// update Product rest api
	
		@PutMapping("/productadmin/index={id}")
		public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product ProductDetails){
			Product product = productRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
			
			product.setProductidLong(ProductDetails.getProductidLong());
			product.setCategoryidLong(ProductDetails.getCategoryidLong());
			product.setTitleString(ProductDetails.getTitleString());
			product.setDescriptionString(ProductDetails.getDescriptionString());
			product.setSlugString(ProductDetails.getSlugString());
			product.setMetakeyString(ProductDetails.getMetakeyString());
			product.setMetadescString(ProductDetails.getMetadescString());
			product.setPriceDouble(ProductDetails.getPriceDouble());
			product.setPricesaleDouble(ProductDetails.getPricesaleDouble());
			product.setDiscountInteger(ProductDetails.getDiscountInteger());
			product.setPositionString(ProductDetails.getPositionString());
			product.setDirectionString(ProductDetails.getDirectionString());
			product.setCreatedatTimestamp(ProductDetails.getCreatedatTimestamp());
			product.setImageString(ProductDetails.getImageString());
			product.setAreaString(ProductDetails.getAreaString());
			product.setAddressString(ProductDetails.getAddressString());
			product.setPhoneString(ProductDetails.getPhoneString());
			product.setCustomerString(ProductDetails.getCustomerString());
			product.setRoomInteger(ProductDetails.getRoomInteger());
			product.setMaincontainerBoolean(ProductDetails.getMaincontainerBoolean());
			product.setDealcontainerBoolean(ProductDetails.getDealcontainerBoolean());
			product.setContainer1Boolean(ProductDetails.getContainer1Boolean());
			product.setContainer2Boolean(ProductDetails.getContainer2Boolean());
			product.setRequestcontainerBoolean(ProductDetails.getRequestcontainerBoolean());
			product.setItemcontainerBoolean(ProductDetails.getItemcontainerBoolean());
			product.setServicecontainerBoolean(ProductDetails.getServicecontainerBoolean());
			product.setRegioncontainerBoolean(ProductDetails.getRegioncontainerBoolean());
			product.setStatusString(ProductDetails.getStatusString());
			
			
			Product updatedProduct = productRepository.save(product);
			return ResponseEntity.ok(updatedProduct);
		}
		
		// delete Product rest api
		@DeleteMapping("/productadmin/index={id}")
		public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id){
			Product product = productRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
			
			productRepository.delete(product);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
