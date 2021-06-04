/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 19, 2021
 * @hour 10:22:51 AM
*/


package com.estate.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.Request;

@Repository
public interface RequestRepository extends JpaRepository<Request, Long>{

}
