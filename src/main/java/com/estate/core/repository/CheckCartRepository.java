/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 4, 2021
 * @hour 8:30:08 PM
*/


package com.estate.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.CheckoutCart;


@Repository
public interface CheckCartRepository extends JpaRepository<CheckoutCart, Long>{

	@Query("Select checkCart  FROM CheckoutCart checkCart WHERE checkCart.user_id=:user_id")
	List<CheckoutCart> getByuserId(@Param("user_id")Long user_id);
}
