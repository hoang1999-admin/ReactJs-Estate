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
	
	
	
}
