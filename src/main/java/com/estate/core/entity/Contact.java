/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 9, 2021
 * @hour 9:30:02 PM
*/


package com.estate.core.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.NumberFormat;

import com.sun.istack.NotNull;

@Entity
@Table(name = "contacts")
public class Contact {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long idLong;@Column(name = "title")
	private String titleString;@Column(name = "fullname")@NotNull
	private String fullnameString;@Column(name = "email")@NotNull 
	private String emailString;@Column(name = "phone")@NotNull @NumberFormat
	private String phoneString;@Column(name = "image")
	private String imageString;@Column(name = "detail")
	private String detailString;@Column(name = "created_at")
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
	public String getFullnameString() {
		return fullnameString;
	}
	public void setFullnameString(String fullnameString) {
		this.fullnameString = fullnameString;
	}
	public String getEmailString() {
		return emailString;
	}
	public void setEmailString(String emailString) {
		this.emailString = emailString;
	}
	public String getPhoneString() {
		return phoneString;
	}
	public void setPhoneString(String phoneString) {
		this.phoneString = phoneString;
	}
	public String getImageString() {
		return imageString;
	}
	public void setImageString(String imageString) {
		this.imageString = imageString;
	}
	public String getDetailString() {
		return detailString;
	}
	public void setDetailString(String detailString) {
		this.detailString = detailString;
	}
	public Timestamp getCreatedatTimestamp() {
		return createdatTimestamp;
	}
	public void setCreatedatTimestamp(Timestamp createdatTimestamp) {
		this.createdatTimestamp = createdatTimestamp;
	}
	public Integer getStatusInteger() {
		return statusInteger;
	}
	public void setStatusInteger(Integer statusInteger) {
		this.statusInteger = statusInteger;
	}
	
	
}
