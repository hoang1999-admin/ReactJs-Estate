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
import org.springframework.data.repository.query.Param;
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
	@Query(value = "SELECT * FROM products ORDER BY id asc limit :limit", nativeQuery = true)
	List<Product> findTopN(@Param("limit") int limit);
//	@Query(value = "SELECT	* FROM products " + "INNER JOIN categorys USING (category_id)", nativeQuery = true)
//	List<Product> findByCategory();
	List<Product> findByCategoryidLong(Long categoryidLong);
	

}
