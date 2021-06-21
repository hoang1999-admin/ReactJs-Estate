/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 4, 2021
 * @hour 9:07:40 PM
*/

package com.estate.core.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estate.core.entity.Cart;
import com.estate.core.entity.CheckoutCart;
import com.estate.core.security.jwt.MessageResponse;
import com.estate.core.security.jwt.ShoppingConfiguration;
import com.estate.core.services.cartservices.CartServices;
import com.estate.core.services.productservices.ProductServices;

@RestController
@RequestMapping("/api/v1/order/")
public class OrderController {
	@Autowired
	CartServices cartService;
	@SuppressWarnings("rawtypes")
	ProductServices proService;

	@RequestMapping("checkout_order")
	public ResponseEntity<?> checkout_order(@RequestBody HashMap<String, String> addCartRequest) {
		try {
			String keys[] = { "userId", "total_price", "pay_type", "deliveryAddress" };
			if (ShoppingConfiguration.validationWithHashMap(keys, addCartRequest)) {

			}
			long user_Id = Long.parseLong(addCartRequest.get("userId"));
			double total_amt = Double.parseDouble(addCartRequest.get("total_price"));
			if (cartService.checkTotalAmountAgainstCart(total_amt, user_Id)) {
				List<Cart> cartItems = cartService.getCartByUserId(user_Id);
				List<CheckoutCart> tmp = new ArrayList<CheckoutCart>();
				for (Cart addCart : cartItems) {
					String orderId = "" + getOrderId();
					CheckoutCart cart = new CheckoutCart();
					cart.setPayment_type(addCartRequest.get("pay_type"));
					cart.setPrice(total_amt);
					cart.setUser_id(user_Id);
					cart.setOrder_id(orderId);
					cart.setProduct(addCart.getProduct());
					cart.setQty(addCart.getQty());
					cart.setDelivery_address(addCartRequest.get("deliveryAddress"));
					tmp.add(cart);
				}
				cartService.saveProductsForCheckout(tmp);
				return ResponseEntity.ok(new MessageResponse("Order placed successfully"));
			} else {
				throw new Exception("Total amount is mismatch");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
		}
	}

	public int getOrderId() {
		Random r = new Random(System.currentTimeMillis());
		return 10000 + r.nextInt(20000);
	}

	@RequestMapping("getOrdersByUserId")
	public ResponseEntity<?> getOrdersByUserId(@RequestBody HashMap<String, String> ordersRequest) {
		try {
			String keys[] = { "userId" };
			if (ShoppingConfiguration.validationWithHashMap(keys, ordersRequest)) {

			}
			return ResponseEntity.ok(new MessageResponse("Order placed successfully"));
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
		}

	}
}
