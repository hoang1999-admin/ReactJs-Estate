/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 9, 2021
 * @hour 8:48:29 PM
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
@Table(name = "categorys")
public class Category implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
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
	private Timestamp createdatTimestamp;@Column(name = "maincontainer")
	private Boolean maincontainerBoolean;@Column(name = "dealcontainer")
	private Boolean dealcontainerBoolean;@Column(name = "container1")
	private Boolean container1Boolean;@Column(name = "container2")
	private Boolean container2Boolean;@Column(name = "requestcontainer")
	private Boolean requestcontainerBoolean;@Column(name = "itemcontainer")
	private Boolean itemcontainerBoolean;@Column(name = "servicecontainer")
	private Boolean servicecontainerBoolean;@Column(name = "regioncontainer")
	private Boolean regioncontainerBoolean;@Column(name = "status")
	private String statusString;
	
//	// product with category
//	@OneToMany(fetch = FetchType.LAZY, mappedBy = "category", cascade = CascadeType.ALL)
//	private Set<Product> products ;
	
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
	
	/**
	 * @return the maincontainerBoolean
	 */
	public Boolean getMaincontainerBoolean() {
		return maincontainerBoolean;
	}
	/**
	 * @param maincontainerBoolean the maincontainerBoolean to set
	 */
	public void setMaincontainerBoolean(Boolean maincontainerBoolean) {
		this.maincontainerBoolean = maincontainerBoolean;
	}
	/**
	 * @return the dealcontainerBoolean
	 */
	public Boolean getDealcontainerBoolean() {
		return dealcontainerBoolean;
	}
	/**
	 * @param dealcontainerBoolean the dealcontainerBoolean to set
	 */
	public void setDealcontainerBoolean(Boolean dealcontainerBoolean) {
		this.dealcontainerBoolean = dealcontainerBoolean;
	}
	/**
	 * @return the container1Boolean
	 */
	public Boolean getContainer1Boolean() {
		return container1Boolean;
	}
	/**
	 * @param container1Boolean the container1Boolean to set
	 */
	public void setContainer1Boolean(Boolean container1Boolean) {
		this.container1Boolean = container1Boolean;
	}
	/**
	 * @return the container2Boolean
	 */
	public Boolean getContainer2Boolean() {
		return container2Boolean;
	}
	/**
	 * @param container2Boolean the container2Boolean to set
	 */
	public void setContainer2Boolean(Boolean container2Boolean) {
		this.container2Boolean = container2Boolean;
	}
	/**
	 * @return the requestcontainerBoolean
	 */
	public Boolean getRequestcontainerBoolean() {
		return requestcontainerBoolean;
	}
	/**
	 * @param requestcontainerBoolean the requestcontainerBoolean to set
	 */
	public void setRequestcontainerBoolean(Boolean requestcontainerBoolean) {
		this.requestcontainerBoolean = requestcontainerBoolean;
	}
	/**
	 * @return the itemcontainerBoolean
	 */
	public Boolean getItemcontainerBoolean() {
		return itemcontainerBoolean;
	}
	/**
	 * @param itemcontainerBoolean the itemcontainerBoolean to set
	 */
	public void setItemcontainerBoolean(Boolean itemcontainerBoolean) {
		this.itemcontainerBoolean = itemcontainerBoolean;
	}
	/**
	 * @return the servicecontainerBoolean
	 */
	public Boolean getServicecontainerBoolean() {
		return servicecontainerBoolean;
	}
	/**
	 * @param servicecontainerBoolean the servicecontainerBoolean to set
	 */
	public void setServicecontainerBoolean(Boolean servicecontainerBoolean) {
		this.servicecontainerBoolean = servicecontainerBoolean;
	}
	/**
	 * @return the regioncontainerBoolean
	 */
	public Boolean getRegioncontainerBoolean() {
		return regioncontainerBoolean;
	}
	/**
	 * @param regioncontainerBoolean the regioncontainerBoolean to set
	 */
	public void setRegioncontainerBoolean(Boolean regioncontainerBoolean) {
		this.regioncontainerBoolean = regioncontainerBoolean;
	}
	/**
	 * @return the serialversionuid
	 */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getStatusString() {
		return statusString;
	}
	
	public void setStatusString(String statusString) {
		this.statusString = statusString;
	}
	
//	public Set<Product> getProducts() {
//		return products;
//	}
//	public void setProducts(Set<Product> products) {
//		this.products = products;
//	}

	
	
	
	
}
