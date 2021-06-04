/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 19, 2021
 * @hour 10:14:15 AM
*/


package com.estate.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "requests")
public class Request {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long idLong;@Column(name = "search")
	private String searchString;@Column(name = "quality")
	private Integer qualityInteger;@Column(name = "title")
	private String titleString;@Column(name = "price")
	private Boolean priceBoolean;@Column(name = "acre")
	private Boolean acreBoolean;@Column(name = "status")
	private Integer statusInteger;
	public Long getIdLong() {
		return idLong;
	}
	public void setIdLong(Long idLong) {
		this.idLong = idLong;
	}
	public String getSearchString() {
		return searchString;
	}
	public void setSearchString(String searchString) {
		this.searchString = searchString;
	}
	public Integer getQualityInteger() {
		return qualityInteger;
	}
	public void setQualityInteger(Integer qualityInteger) {
		this.qualityInteger = qualityInteger;
	}
	public String getTitleString() {
		return titleString;
	}
	public void setTitleString(String titleString) {
		this.titleString = titleString;
	}
	public Boolean getPriceBoolean() {
		return priceBoolean;
	}
	public void setPriceBoolean(Boolean priceBoolean) {
		this.priceBoolean = priceBoolean;
	}
	public Boolean getAcreBoolean() {
		return acreBoolean;
	}
	public void setAcreBoolean(Boolean acreBoolean) {
		this.acreBoolean = acreBoolean;
	}
	public Integer getStatusInteger() {
		return statusInteger;
	}
	public void setStatusInteger(Integer statusInteger) {
		this.statusInteger = statusInteger;
	}

	
	
}
