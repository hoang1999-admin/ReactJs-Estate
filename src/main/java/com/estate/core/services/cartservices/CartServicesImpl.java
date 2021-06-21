/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 4, 2021
 * @hour 8:37:24 PM
*/


package com.estate.core.services.cartservices;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estate.core.entity.Cart;
import com.estate.core.entity.CheckoutCart;
import com.estate.core.entity.Product;
import com.estate.core.repository.CartRepository;
import com.estate.core.repository.CheckCartRepository;
import com.estate.core.services.productservices.ProductServices;



@Service
@Transactional
public class CartServicesImpl implements CartServices{
	@Autowired
	CartRepository addCartRepo;
	@Autowired
	CheckCartRepository checkOutRepo;
	@SuppressWarnings("rawtypes")
	@Autowired
	ProductServices proServices;
	
	private static final Logger logger = LoggerFactory.getLogger(CartServicesImpl.class);
	
	@Override
	public List<Cart> addCartbyUserIdAndProductId(long productId, long userId, int qty, double price) throws Exception {
		try {
			if(addCartRepo.getCartByProductIdAnduserId(userId, productId).isPresent())
			{
				throw new Exception("Product is already exist.");
			}
			Cart obj = new Cart();
			obj.setQty(qty);
			obj.setUser_id(userId);
			Product pro = proServices.getProductsById(productId);
			obj.setProduct(pro); 
			
			obj.setPrice(price);
			addCartRepo.save(obj);		
			return this.getCartByUserId(userId);	
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(""+e.getMessage());
			throw new Exception(e.getMessage());
		}
	
	}

	@Override
	public void updateQtyByCartId(long cartId, int qty, double price) throws Exception {
		addCartRepo.updateQtyByCartId(cartId,price,qty);
	}

	@Override
	public List<Cart> getCartByUserId(long userId) {
		return addCartRepo.getCartByuserId(userId);
	}

	@Override
	public List<Cart> removeCartByUserId(long cartId, long userId) {
		addCartRepo.deleteCartByIdAndUserId(userId, cartId);
		return this.getCartByUserId(userId);
	}

	@Override
	public List<Cart> removeAllCartByUserId(long userId) {
		addCartRepo.deleteAllCartByUserId(userId);
		return null;
	}

	@Override
	public Boolean checkTotalAmountAgainstCart(double totalAmount, long userId) {
		double total_amount =addCartRepo.getTotalAmountByUserId(userId);
		if(total_amount == totalAmount) {
			return true;
		}
		System.out.print("Error from request "+total_amount +" --db-- "+ totalAmount);
		return false;
	}

	@Override
	public List<CheckoutCart> getAllCheckoutByUserId(long userId) {
		return checkOutRepo.getByuserId(userId);
	}

	@Override
	public List<CheckoutCart> saveProductsForCheckout(List<CheckoutCart> tmp) throws Exception {
		try {
			long user_id = tmp.get(0).getUser_id();
			if(tmp.size() >0) {
				checkOutRepo.saveAll(tmp);
				this.removeAllCartByUserId(user_id);
				return this.getAllCheckoutByUserId(user_id);
			}	
			else {
				throw  new Exception("Should not be empty");
			}
		}catch(Exception e) {
			throw new Exception("Error while checkout "+e.getMessage());
		}
	}

}
