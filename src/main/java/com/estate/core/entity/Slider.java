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
