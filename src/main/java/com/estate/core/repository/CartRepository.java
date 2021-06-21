/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 4, 2021
 * @hour 8:29:01 PM
*/


package com.estate.core.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.Cart;


@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
	
	@Query("Select sum(addCart.price) FROM Cart addCart WHERE addCart.user_id=:user_id")
	double getTotalAmountByUserId(@Param("user_id")Long user_id);
	
	@Query("Select addCart  FROM Cart addCart WHERE addCart.user_id=:user_id")
	List<Cart> getCartByuserId(@Param("user_id")Long user_id);
	
	@Query("Select addCart  FROM Cart addCart ")
	Optional<Cart> getCartByuserIdtest();
	
	@Query("Select addCart  FROM Cart addCart WHERE addCart.product.id= :product_id and addCart.user_id=:user_id")
	Optional<Cart> getCartByProductIdAnduserId(@Param("user_id")Long user_id,@Param("product_id")Long product_id);
	
	@Modifying
    @Transactional
	@Query("DELETE  FROM Cart addCart WHERE addCart.id =:cart_id   and addCart.user_id=:user_id")
	void deleteCartByIdAndUserId(@Param("user_id")Long user_id,@Param("cart_id")Long cart_id);
	
	@Modifying
    @Transactional
	@Query("DELETE  FROM Cart addCart WHERE   addCart.user_id=:user_id")
	void deleteAllCartByUserId(@Param("user_id")Long user_id);
	
	@Modifying
    @Transactional
	@Query("DELETE  FROM Cart addCart WHERE addCart.user_id=:user_id")
	void deleteAllCartUserId(@Param("user_id")Long user_id);
	
	@Modifying
    @Transactional
	@Query("update Cart addCart set addCart.qty=:qty,addCart.price=:price WHERE addCart.id=:cart_id")
	void updateQtyByCartId(@Param("cart_id")Long cart_id,@Param("price")double price,@Param("qty")Integer qty);
	
}
