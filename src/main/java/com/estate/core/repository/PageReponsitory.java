/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jul 2, 2021
 * @hour 9:52:34 AM
*/


package com.estate.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.Page;

@Repository
public interface PageReponsitory extends JpaRepository<Page,Long> {
	@Query(value = "SELECT * FROM Pages WHERE category_id = 1 AND status = '1'", nativeQuery = true)
	public List<Page> findsale();
	@Query(value = "SELECT * FROM Pages WHERE category_id = 2 AND status = '1'", nativeQuery = true)
	public List<Page> findartiher();
	@Query(value = "SELECT * FROM Pages WHERE category_id = 3 AND status = '1'", nativeQuery = true)
	public List<Page> findhome();
	@Query(value = "SELECT * FROM Pages WHERE category_id = 4 AND status = '1'", nativeQuery = true)
	public List<Page> findfend();
	@Query(value = "SELECT * FROM Pages WHERE category_id = 5 AND status = '1'", nativeQuery = true)
	public List<Page> findexpen();
	@Query(value = "SELECT * FROM Pages WHERE category_id = 6 AND status = '1'", nativeQuery = true)
	public List<Page> findbuld();
}
