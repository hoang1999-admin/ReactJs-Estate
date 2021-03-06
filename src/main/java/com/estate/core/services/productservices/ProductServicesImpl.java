/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 20, 2021
 * @hour 11:46:26 AM
*/


package com.estate.core.services.productservices;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.estate.core.entity.Product;
import com.estate.core.repository.ProductRepository;


@Service
@Transactional
public class ProductServicesImpl implements ProductServices<Product>{

	@Autowired
	private ProductRepository productRepository;
	@Override
	public Page<Product> findAllProducts(Pageable pageable, String searchText) {
		return productRepository.findAllProducts(pageable, searchText);
	}

	@Override
	public Page<Product> findAll(Pageable pageable) {
		return productRepository.findAll(pageable);
	}
	public Product getProductsById(long productId) throws Exception {
		return productRepository.findById(productId).orElseThrow(() ->new Exception("Product is not found"));
	}

}
