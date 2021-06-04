/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 27, 2021
 * @hour 11:23:13 AM
*/


package com.estate.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.ProductRelation;



@Repository
public interface ProductRelationRepository extends JpaRepository<ProductRelation, Long> {

	public List<ProductRelation> findByProductidLong(Long productidLong);

}
