/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 20, 2021
 * @hour 11:45:08 AM
*/


package com.estate.core.services.productservices;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.estate.core.entity.Product;

public interface ProductServices<T> {
	
	Page<T> findAllProducts(Pageable pageable, String searchText);

	Page<T> findAll(Pageable pageable);
	
	public Product getProductsById(long productId) throws Exception;
}
