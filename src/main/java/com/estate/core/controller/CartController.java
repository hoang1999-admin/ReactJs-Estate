/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 4, 2021
 * @hour 9:07:24 PM
*/


package com.estate.core.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estate.core.entity.Cart;
import com.estate.core.security.jwt.MessageResponse;
import com.estate.core.security.jwt.ShoppingConfiguration;
import com.estate.core.services.cartservices.CartServices;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/cart/")
public class CartController {
	
	@Autowired
	CartServices cartService;
	@RequestMapping("addProduct")
  	public ResponseEntity<?> addCartwithProduct(@RequestBody HashMap<String,String> addCartRequest) {
		try {
			String keys[] = {"productId","userId","qty","price"};
			if(ShoppingConfiguration.validationWithHashMap(keys, addCartRequest)) {
				
			}
			long productId = Long.parseLong(addCartRequest.get("productId")); 
			long userId =  Long.parseLong(addCartRequest.get("userId")); 
			int qty =  Integer.parseInt(addCartRequest.get("qty")); 
			double price = Double.parseDouble(addCartRequest.get("price"));
			List<Cart> obj = cartService.addCartbyUserIdAndProductId(productId,userId,qty,price);
			return ResponseEntity.ok(obj);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
		}
		
   }
	
	@RequestMapping("updateQtyForCart")
  	public ResponseEntity<?> updateQtyForCart(@RequestBody HashMap<String,String> addCartRequest) {
		try {
			String keys[] = {"cartId","userId","qty","price"};
			if(ShoppingConfiguration.validationWithHashMap(keys, addCartRequest)) {
				
			}
			long cartId = Long.parseLong(addCartRequest.get("cartId")); 
			long userId =  Long.parseLong(addCartRequest.get("userId")); 
			int qty =  Integer.parseInt(addCartRequest.get("qty")); 
			double price = Double.parseDouble(addCartRequest.get("price"));
			 cartService.updateQtyByCartId(cartId, qty, price);
			 List<Cart> obj = cartService.getCartByUserId(userId);
			return ResponseEntity.ok(obj);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
		}
		
   }
	
	
	@RequestMapping("removeProductFromCart")
  	public ResponseEntity<?> removeCartwithProductId(@RequestBody HashMap<String,String> removeCartRequest) {
		try {
			String keys[] = {"userId","cartId"};
			if(ShoppingConfiguration.validationWithHashMap(keys, removeCartRequest)) {
				
			}
			List<Cart> obj = cartService.removeCartByUserId(Long.parseLong(removeCartRequest.get("cartId")), Long.parseLong(removeCartRequest.get("userId")));
			return ResponseEntity.ok(obj);
		}catch(Exception e) {
				return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
		}		
   }
	
	@RequestMapping("getCartsByUserId")
  	public ResponseEntity<?> getCartsByUserId(@RequestBody HashMap<String,String> getCartRequest) {
		try {
			String keys[] = {"userId"};
			if(ShoppingConfiguration.validationWithHashMap(keys, getCartRequest)) {
			}
			List<Cart> obj = cartService.getCartByUserId(Long.parseLong(getCartRequest.get("userId")));
			return ResponseEntity.ok(obj);
		}catch(Exception e) {
				return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
		}	
   }
}