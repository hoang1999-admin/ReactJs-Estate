/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 19, 2021
 * @hour 6:17:37 PM
*/


package com.estate.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.Area;


@Repository
public interface AreaRepository extends JpaRepository<Area,Long>{
	@Query(value = "SELECT * FROM areas ORDER BY id asc limit :limit", nativeQuery = true)
	public List<Area> findTopN(@Param("limit") int limit);
}
