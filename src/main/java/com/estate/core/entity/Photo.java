/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 9, 2021
 * @hour 9:33:49 PM
*/


package com.estate.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "photos")
public class Photo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long idLong;@Column(name = "title")
	private String titleString;@Column(name = "image")
	private String imageString;@Column(name = "type")
	private Integer typeInteger;@Column(name = "id_product")
	private Long productidLong;@Column(name = "status")
	private Integer statusInteger;
	public Long getIdLong() {
		return idLong;
	}
	public void setIdLong(Long idLong) {
		this.idLong = idLong;
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
	
	/**
	 * @return the typeInteger
	 */
	public Integer getTypeInteger() {
		return typeInteger;
	}
	/**
	 * @param typeInteger the typeInteger to set
	 */
	public void setTypeInteger(Integer typeInteger) {
		this.typeInteger = typeInteger;
	}
	public Long getProductidLong() {
		return productidLong;
	}
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
