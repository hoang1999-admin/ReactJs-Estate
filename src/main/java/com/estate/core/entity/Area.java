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
	private Long product_idLong;@Column(name = "title")
	private String titleString;@Column(name = "image")
	private String imageString;@Column(name = "status")
	private Integer statusInteger;
	
	
	
	public Long getIdLong() {
		return idLong;
	}
	public void setIdLong(Long idLong) {
		this.idLong = idLong;
	}
	public Long getProduct_idLong() {
		return product_idLong;
	}
	public void setProduct_idLong(Long product_idLong) {
		this.product_idLong = product_idLong;
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
