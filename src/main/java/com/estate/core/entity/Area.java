/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 19, 2021
 * @hour 6:13:14 PM
*/


package com.estate.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "areas")
public class Area {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long idLong;@Column(name = "product_id")
	private Long productidLong;@Column(name = "title")
	private String titleString;@Column(name = "image")
	private String imageString;@Column(name = "status")
	private Integer statusInteger;
	
	
	
	public Long getIdLong() {
		return idLong;
	}
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
	public String getTitleString() {
		return titleString;
	}
	public void setTitleString(String titleString) {
		this.titleString = titleString;
	}
	public String getImageString() {
		return imageString;
	}
	public void setImageString(String imageString) {
		this.imageString = imageString;
	}
	public Integer getStatusInteger() {
		return statusInteger;
	}
	public void setStatusInteger(Integer statusInteger) {
		this.statusInteger = statusInteger;
	}

	
}
