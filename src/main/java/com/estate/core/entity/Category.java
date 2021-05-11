/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 9, 2021
 * @hour 8:48:29 PM
*/


package com.estate.core.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;	
import javax.persistence.Table;

@Entity
@Table(name = "categorys")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long idLong;@Column(name = "parent_id")
	private Long parentidLong;@Column(name = "title")
	private String titleString;@Column(name = "slug")
	private String slugString;@Column(name = "orders")
	private Long orderLong;@Column(name = "metakey")
	private String metakeyString;@Column(name = "metadesc")
	private String metadescString;@Column(name = "created_at")
	private Timestamp createdatTimestamp;@Column(name = "status")
	private String statusString;
	
	public Long getIdLong() {
		return idLong;
	}
	public void setIdLong(Long idLong) {
		this.idLong = idLong;
	}
	public Long getParentidLong() {
		return parentidLong;
	}
	public void setParentidLong(Long parentidLong) {
		this.parentidLong = parentidLong;
	}
	public String getTitleString() {
		return titleString;
	}
	public void setTitleString(String titleString) {
		this.titleString = titleString;
	}
	public String getSlugString() {
		return slugString;
	}
	public void setSlugString(String slugString) {
		this.slugString = slugString;
	}

	public Long getOrderLong() {
		return orderLong;
	}
	public void setOrderLong(Long orderLong) {
		this.orderLong = orderLong;
	}
	public String getMetakeyString() {
		return metakeyString;
	}
	public void setMetakeyString(String metakeyString) {
		this.metakeyString = metakeyString;
	}
	public String getMetadescString() {
		return metadescString;
	}
	public void setMetadescString(String metadescString) {
		this.metadescString = metadescString;
	}
	public Timestamp getCreatedatTimestamp() {
		return createdatTimestamp;
	}
	public void setCreatedatTimestamp(Timestamp createdatTimestamp) {
		this.createdatTimestamp = createdatTimestamp;
	}
	public String getStatusString() {
		return statusString;
	}
	public void setStatusString(String statusString) {
		this.statusString = statusString;
	}

	
	
	
	
}
