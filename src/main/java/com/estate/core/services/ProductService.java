/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 20, 2021
 * @hour 11:45:08 AM
*/


package com.estate.core.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductService<T> {
	
	Page<T> findAllProducts(Pageable pageable, String searchText);

	Page<T> findAll(Pageable pageable);
	
}
