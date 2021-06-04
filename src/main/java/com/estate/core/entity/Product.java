/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 9, 2021
 * @hour 9:03:57 PM
*/


package com.estate.core.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Product implements Serializable{
	
	/**
	 * 
	 */
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
	private Double priceDouble;@Column(name = "pricesale")
	private Double pricesaleDouble;@Column(name = "discount")
	private Integer discountInteger;@Column(name = "position")
	private String positionString;@Column(name = "direction")
	private String directionString;@Column(name = "created_at")
	private Timestamp createdatTimestamp;@Column(name = "image")
	private String imageString;@Column(name = "area")
	private String areaString;@Column(name = "address")
	private String addressString;@Column(name = "phone")
	private String phoneString;@Column(name = "customer")
	private String customerString;@Column(name = "room")
	private Integer roomInteger;@Column(name = "maincontainer")
	private Boolean maincontainerBoolean;@Column(name = "dealcontainer")
	private Boolean dealcontainerBoolean;@Column(name = "container1")
	private Boolean container1Boolean;@Column(name = "container2")
	private Boolean container2Boolean;@Column(name = "requestcontainer")
	private Boolean requestcontainerBoolean;@Column(name = "itemcontainer")
	private Boolean itemcontainerBoolean;@Column(name = "servicecontainer")
	private Boolean servicecontainerBoolean;@Column(name = "regioncontainer")
	private Boolean regioncontainerBoolean;@Column(name = "status")
	private String statusString;
	// category with product
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "category_id", nullable = false)
//	private Category category;
//	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="product_id")

	private List<ProductRelation> relative;
	
	/**
	 * @return the relative
	 */
	public List<ProductRelation> getRelative() {
		return relative;
	}
	/**
	 * @param relative the relative to set
	 */
	public void setRelative(List<ProductRelation> relative) {
		this.relative = relative;
	}
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="id_product")

	private List<Photo> photo;
	
	
	/**
	 * @return the photo
	 */
	public List<Photo> getPhoto() {
		return photo;
	}
	/**
	 * @param photo the photo to set
	 */
	public void setPhoto(List<Photo> photo) {
		this.photo = photo;
	}
	/**
	 * @return the serialversionuid
	 */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
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
	public Double getPriceDouble() {
		return priceDouble;
	}
	public void setPriceDouble(Double priceDouble) {
		this.priceDouble = priceDouble;
	}
	public Double getPricesaleDouble() {
		return pricesaleDouble;
	}
	public void setPricesaleDouble(Double pricesaleDouble) {
		this.pricesaleDouble = pricesaleDouble;
	}
	public Integer getDiscountInteger() {
		return discountInteger;
	}
	public void setDiscountInteger(Integer discountInteger) {
		this.discountInteger = discountInteger;
	}
	public String getPositionString() {
		return positionString;
	}
	public void setPositionString(String positionString) {
		this.positionString = positionString;
	}
	public String getDirectionString() {
		return directionString;
	}
	public void setDirectionString(String directionString) {
		this.directionString = directionString;
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
	public Integer getRoomInteger() {
		return roomInteger;
	}
	public void setRoomInteger(Integer roomInteger) {
		this.roomInteger = roomInteger;
	}
	public Boolean getMaincontainerBoolean() {
		return maincontainerBoolean;
	}
	public void setMaincontainerBoolean(Boolean maincontainerBoolean) {
		this.maincontainerBoolean = maincontainerBoolean;
	}
	public Boolean getDealcontainerBoolean() {
		return dealcontainerBoolean;
	}
	public void setDealcontainerBoolean(Boolean dealcontainerBoolean) {
		this.dealcontainerBoolean = dealcontainerBoolean;
	}
	public Boolean getContainer1Boolean() {
		return container1Boolean;
	}
	public void setContainer1Boolean(Boolean container1Boolean) {
		this.container1Boolean = container1Boolean;
	}
	public Boolean getContainer2Boolean() {
		return container2Boolean;
	}
	public void setContainer2Boolean(Boolean container2Boolean) {
		this.container2Boolean = container2Boolean;
	}
	public Boolean getRequestcontainerBoolean() {
		return requestcontainerBoolean;
	}
	public void setRequestcontainerBoolean(Boolean requestcontainerBoolean) {
		this.requestcontainerBoolean = requestcontainerBoolean;
	}
	public Boolean getItemcontainerBoolean() {
		return itemcontainerBoolean;
	}
	public void setItemcontainerBoolean(Boolean itemcontainerBoolean) {
		this.itemcontainerBoolean = itemcontainerBoolean;
	}
	public Boolean getServicecontainerBoolean() {
		return servicecontainerBoolean;
	}
	public void setServicecontainerBoolean(Boolean servicecontainerBoolean) {
		this.servicecontainerBoolean = servicecontainerBoolean;
	}
	public Boolean getRegioncontainerBoolean() {
		return regioncontainerBoolean;
	}
	public void setRegioncontainerBoolean(Boolean regioncontainerBoolean) {
		this.regioncontainerBoolean = regioncontainerBoolean;
	}
	public String getStatusString() {
		return statusString;
	}
	public void setStatusString(String statusString) {
		this.statusString = statusString;
	}
//	public Category getCategory() {
//		return category;
//	}
//	public void setCategory(Category category) {
//		this.category = category;
//	}
	@Override
	public String toString() {
		return "Product [idLong=" + idLong + ", productidLong=" + productidLong + ", categoryidLong=" + categoryidLong
				+ ", titleString=" + titleString + ", descriptionString=" + descriptionString + ", slugString="
				+ slugString + ", metakeyString=" + metakeyString + ", metadescString=" + metadescString
				+ ", priceDouble=" + priceDouble + ", pricesaleDouble=" + pricesaleDouble + ", discountInteger="
				+ discountInteger + ", positionString=" + positionString + ", directionString=" + directionString
				+ ", createdatTimestamp=" + createdatTimestamp + ", imageString=" + imageString + ", areaString="
				+ areaString + ", addressString=" + addressString + ", phoneString=" + phoneString + ", customerString="
				+ customerString + ", roomInteger=" + roomInteger + ", maincontainerBoolean=" + maincontainerBoolean
				+ ", dealcontainerBoolean=" + dealcontainerBoolean + ", container1Boolean=" + container1Boolean
				+ ", container2Boolean=" + container2Boolean + ", requestcontainerBoolean=" + requestcontainerBoolean
				+ ", itemcontainerBoolean=" + itemcontainerBoolean + ", servicecontainerBoolean="
				+ servicecontainerBoolean + ", regioncontainerBoolean=" + regioncontainerBoolean + ", statusString="
				+ statusString + "]";
	}

	
}
