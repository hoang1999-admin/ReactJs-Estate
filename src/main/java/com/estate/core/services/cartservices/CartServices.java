/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 4, 2021
 * @hour 8:37:02 PM
*/


package com.estate.core.services.cartservices;

import java.util.List;

import org.springframework.stereotype.Service;

import com.estate.core.entity.Cart;
import com.estate.core.entity.CheckoutCart;

@Service
public interface CartServices {
	List<Cart> addCartbyUserIdAndProductId(long productId,long userId,int qty,double price) throws Exception;
	
	void updateQtyByCartId(long cartId,int qty,double price) throws Exception;
	
	List<Cart> getCartByUserId(long userId);
	
	List<Cart> removeCartByUserId(long cartId,long userId);
	
	List<Cart> removeAllCartByUserId(long userId);
	
	Boolean checkTotalAmountAgainstCart(double totalAmount,long userId);
	
	List<CheckoutCart> getAllCheckoutByUserId(long userId);
	
	List<CheckoutCart> saveProductsForCheckout(List<CheckoutCart> tmp)  throws Exception;
}
