/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 9, 2021
 * @hour 9:38:58 PM
*/


package com.estate.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long>{
	
	@Query("FROM Product WHERE container2 = true AND status = 1")
	List<Product> getListSale();
	@Query("FROM Product WHERE container1 = true AND status = 1")
	List<Product> getListRent();
	@Query("FROM Product WHERE dealcontainer = true AND status = 1")
	List<Product> getListDeal();
	

}
