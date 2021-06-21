/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 9, 2021
 * @hour 9:41:31 PM
*/


package com.estate.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
	
	@Query(value = "SELECT * FROM categorys ORDER BY id asc limit :limit", nativeQuery = true)
	public List<Category> findTopN(@Param("limit") int limit);
	
	@Query(value = "SELECT * FROM categorys WHERE container1 = true OR container2 = true AND status = '1'", nativeQuery = true)
	public List<Category> findSaleAndRent();
	
	@Query(value = "SELECT * FROM categorys WHERE container2 = true AND status = '1'", nativeQuery = true)
	public List<Category> findSale();
	
	@Query(value = "SELECT * FROM categorys WHERE container1 = true AND status = '1'", nativeQuery = true)
	public List<Category> findRent();
	
	@Query(value = "SELECT * FROM categorys WHERE maincontainer = true AND dealcontainer = false AND container1 = false AND container2 = false AND requestcontainer = false AND itemcontainer = false AND servicecontainer = false AND regioncontainer = false AND status = '1'", nativeQuery = true)
	public List<Category> findApply();
	
	@Query(value = "SELECT * FROM categorys WHERE maincontainer = false AND dealcontainer = true AND container1 = false AND container2 = false AND requestcontainer = false AND itemcontainer = false AND servicecontainer = false AND regioncontainer = false AND status = '1'", nativeQuery = true)
	public List<Category> findFurnitureandexterior();
	
	@Query(value = "SELECT * FROM categorys WHERE maincontainer = true AND dealcontainer = true AND container1 = false AND container2 = false AND requestcontainer = true AND itemcontainer = false AND servicecontainer = false AND regioncontainer = false AND status = '1'", nativeQuery = true)
	public List<Category> findFengShui();
	
	@Query(value = "SELECT * FROM categorys WHERE maincontainer = false AND dealcontainer = true AND container1 = false AND container2 = false AND requestcontainer = false AND itemcontainer = true AND servicecontainer = true AND regioncontainer = true AND status = '1'", nativeQuery = true)
	public List<Category> findRecruitment();
	
	@Query(value = "SELECT * FROM categorys WHERE maincontainer = true AND dealcontainer = true AND container1 = false AND container2 = false AND requestcontainer = true AND itemcontainer = false AND servicecontainer = true AND regioncontainer = false AND status = '1'", nativeQuery = true)
	public List<Category> findExample();
	
}
