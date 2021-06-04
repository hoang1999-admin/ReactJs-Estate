/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 27, 2021
 * @hour 10:47:19 AM
*/


package com.estate.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "productrelations")
public class ProductRelation {
	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long idLong;@Column(name = "product_id")
	private Long productidLong;
	/**
	 * @return the idLong
	 */
	public Long getIdLong() {
		return idLong;
	}
	/**
	 * @param idLong the idLong to set
	 */
	public void setIdLong(Long idLong) {
		this.idLong = idLong;
	}
	/**
	 * @return the productidLong
	 */
	public Long getProductidLong() {
		return productidLong;
	}
	/**
	 * @param productidLong the productidLong to set
	 */
	public void setProductidLong(Long productidLong) {
		this.productidLong = productidLong;
	}
	
}
