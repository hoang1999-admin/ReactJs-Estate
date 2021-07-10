/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jul 2, 2021
 * @hour 9:51:24 AM
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
@Table(name = "pages")
public class Page implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long idLong;@Column(name = "category_id")
	private Long categoryidLong;@Column(name = "title")
	private String titleString;@Column(name = "description")
	private String descriptionString;@Column(name = "slug")
	private String slugString;@Column(name = "created_at")
	private Timestamp createdatTimestamp;@Column(name = "image")
	private String imageString;@Column(name = "status")
	private String statusString;@Column(name = "image1")
	private String image1String;@Column(name = "image2")
	private String image2String;@Column(name = "image3")
	private String image3String;@Column(name = "description1")
	private String description1String;@Column(name = "description2")
	private String description2String;@Column(name = "description3")
	private String description3String;
	
	public Long getIdLong() {
		return idLong;
	}
	public void setIdLong(Long idLong) {
		this.idLong = idLong;
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
	public String getStatusString() {
		return statusString;
	}
	public void setStatusString(String statusString) {
		this.statusString = statusString;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getImage1String() {
		return image1String;
	}
	public void setImage1String(String image1String) {
		this.image1String = image1String;
	}
	public String getImage2String() {
		return image2String;
	}
	public void setImage2String(String image2String) {
		this.image2String = image2String;
	}
	public String getImage3String() {
		return image3String;
	}
	public void setImage3String(String image3String) {
		this.image3String = image3String;
	}
	public String getDescription1String() {
		return description1String;
	}
	public void setDescription1String(String description1String) {
		this.description1String = description1String;
	}
	public String getDescription2String() {
		return description2String;
	}
	public void setDescription2String(String description2String) {
		this.description2String = description2String;
	}
	public String getDescription3String() {
		return description3String;
	}
	public void setDescription3String(String description3String) {
		this.description3String = description3String;
	}
	
}
