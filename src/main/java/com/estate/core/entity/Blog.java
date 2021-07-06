/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jul 1, 2021
 * @hour 10:27:25 PM
*/


package com.estate.core.entity;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "blogs")
public class Blog implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long idLong;@Column(name = "product_id")
	private String productidLong;@Column(name = "category_id")
	private Long categoryidLong;@Column(name = "title")
	private String titleString;@Column(name = "description")
	private String descriptionString;@Column(name = "slug")
	private String slugString;@Column(name = "metakey")
	private String metakeyString;@Column(name = "metadesc")
	private String metadescString;@Column(name = "price")
	private String priceDouble;@Column(name = "position")
	private String positionString;@Column(name = "created_at")
	private Timestamp createdatTimestamp;@Column(name = "image")
	private String imageString;@Column(name = "area")
	private String areaString;@Column(name = "address")
	private String addressString;@Column(name = "phone")
	private String phoneString;@Column(name = "customer")
	private String customerString;@Column(name = "status")
	private String statusString;
	
	public Long getIdLong() {
		return idLong;
	}
	public void setIdLong(Long idLong) {
		this.idLong = idLong;
	}
	public String getProductidLong() {
		return productidLong;
	}
	public void setProductidLong(String productidLong) {
		this.productidLong = productidLong;
	}
	public Long getCategoryidLong() {
		return categoryidLong;
	}
	public void setCategoryidLong(Long categoryidLong) {
		this.categoryidLong = categoryidLong;
	}
	public String getTitleString() {
		return titleString;
	}
	public void setTitleString(String titleString) {
		this.titleString = titleString;
	}
	public String getDescriptionString() {
		return descriptionString;
	}
	public void setDescriptionString(String descriptionString) {
		this.descriptionString = descriptionString;
	}
	public String getSlugString() {
		return slugString;
	}
	public void setSlugString(String slugString) {
		this.slugString = slugString;
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
	public String getPriceDouble() {
		return priceDouble;
	}
	public void setPriceDouble(String priceDouble) {
		this.priceDouble = priceDouble;
	}
	public String getPositionString() {
		return positionString;
	}
	public void setPositionString(String positionString) {
		this.positionString = positionString;
	}
	public Timestamp getCreatedatTimestamp() {
		return createdatTimestamp;
	}
	public void setCreatedatTimestamp(Timestamp createdatTimestamp) {
		this.createdatTimestamp = createdatTimestamp;
	}
	public String getImageString() {
		return imageString;
	}
	public void setImageString(String imageString) {
		this.imageString = imageString;
	}
	public String getAreaString() {
		return areaString;
	}
	public void setAreaString(String areaString) {
		this.areaString = areaString;
	}
	public String getAddressString() {
		return addressString;
	}
	public void setAddressString(String addressString) {
		this.addressString = addressString;
	}
	public String getPhoneString() {
		return phoneString;
	}
	public void setPhoneString(String phoneString) {
		this.phoneString = phoneString;
	}
	public String getCustomerString() {
		return customerString;
	}
	public void setCustomerString(String customerString) {
		this.customerString = customerString;
	}
	public String getStatusString() {
		return statusString;
	}
	public void setStatusString(String statusString) {
		this.statusString = statusString;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
}
