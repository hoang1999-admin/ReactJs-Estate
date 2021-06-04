/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 9, 2021
 * @hour 9:38:58 PM
*/


package com.estate.core.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product,Long>,PagingAndSortingRepository<Product,Long>{
	
	@Query(value ="SELECT * FROM products WHERE id in (SELECT pr.id FROM productrelations pr WHERE pr.product_id = :id)",nativeQuery = true)
	List<Product> getListProductRelation(@Param("id") long id);
	
	@Query(value ="SELECT * FROM products WHERE id in (SELECT pr.id FROM photos pr WHERE pr.id_product = :id)",nativeQuery = true)
	List<Product> getListProductPhoto(@Param("id") long id);
	
	@Query(value ="FROM Product WHERE container2 = true AND status = 1")
	List<Product> getListSale();
	
	@Query(value ="FROM Product WHERE container1 = true AND status = 1")
	List<Product> getListRent();
	
	@Query(value =" FROM Product WHERE dealcontainer = true AND status = 1")
	List<Product> getListDeal();
	
	@Query(value = "SELECT * FROM products ORDER BY id asc limit :limit", nativeQuery = true)
	List<Product> findTopN(@Param("limit") int limit);
	
	@Query("FROM Product WHERE category_id=:cat_id")
	List<Product> getByCategoryId(@Param("cat_id") String product_id);
	
	List<Product> findByCategoryidLong(Long categoryidLong);
	
	Page<Product> findAll(Pageable pageable);
	
	@Query("SELECT p FROM Product p WHERE cast(product_id AS string) LIKE concat(concat('%',:searchText),'%') OR cast(title AS string) LIKE  concat(concat('%',:searchText),'%') "
			+ "OR cast(price AS string) LIKE concat(concat('%',:searchText),'%') OR cast(position AS string) LIKE concat(concat('%',:searchText),'%') "
			+ "OR cast(direction AS string) LIKE concat(concat('%',:searchText),'%') OR cast(area AS string) LIKE concat(concat('%',:searchText),'%') OR cast(phone AS string) LIKE concat(concat('%',:searchText),'%') "
			+"OR cast(address AS string) LIKE concat(concat('%',:searchText),'%') OR cast(metakey AS string) LIKE concat(concat('%',:searchText),'%') "
			+ " ORDER BY price ASC")
    Page<Product> findAllProducts(Pageable pageable, @Param("searchText") String searchText);
	

}
