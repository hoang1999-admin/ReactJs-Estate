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
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "productrelations")
public class ProductRelation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long idLong;@Column(name = "productrelation_id")
	private Long productrelationidLong;@Column(name = "product_id")
	private Long productidLong;@Column(name = "status")
	private Integer statusInteger;
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
	 * @return the productrelationidLong
	 */
	public Long getProductrelationidLong() {
		return productrelationidLong;
	}
	/**
	 * @param productrelationidLong the productrelationidLong to set
	 */
	public void setProductrelationidLong(Long productrelationidLong) {
		this.productrelationidLong = productrelationidLong;
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
	/**
	 * @return the statusInteger
	 */
	public Integer getStatusInteger() {
		return statusInteger;
	}
	/**
	 * @param statusInteger the statusInteger to set
	 */
	public void setStatusInteger(Integer statusInteger) {
		this.statusInteger = statusInteger;
	}
	
}
