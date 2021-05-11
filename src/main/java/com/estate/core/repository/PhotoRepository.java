/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 9, 2021
 * @hour 9:44:03 PM
*/


package com.estate.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.Photo;


@Repository
public interface PhotoRepository extends JpaRepository<Photo,Long> {
	
	@Query("FROM Photo WHERE id = id_product")
	List<Photo> getPhoto();
}
