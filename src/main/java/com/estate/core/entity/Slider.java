/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 9, 2021
 * @hour 9:18:15 PM
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
@Table(name = "sliders")
public class Slider {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long idLong;@Column(name = "title")
	private String titleString;@Column(name = "link")
	private String linkString;@Column(name = "position")
	private String positionString;@Column(name = "image")
	private String imageString;@Column(name = "orders")
	private Integer orderInteger;@Column(name = "metakey")
	private String metakeyString;@Column(name = "metadesc")
	private String metadescString;@Column(name = "created_at")
	private Timestamp createdatTimestamp;@Column(name = "status")
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
	public String getLinkString() {
		return linkString;
	}
	public void setLinkString(String linkString) {
		this.linkString = linkString;
	}
	public String getPositionString() {
		return positionString;
	}
	public void setPositionString(String positionString) {
		this.positionString = positionString;
	}
	public String getImageString() {
		return imageString;
	}
	public void setImageString(String imageString) {
		this.imageString = imageString;
	}
	
	/**
	 * @return the orderInteger
	 */
	public Integer getOrderInteger() {
		return orderInteger;
	}
	/**
	 * @param orderInteger the orderInteger to set
	 */
	public void setOrderInteger(Integer orderInteger) {
		this.orderInteger = orderInteger;
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
