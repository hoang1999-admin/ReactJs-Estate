/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 17, 2021
 * @hour 12:40:46 PM
*/


package com.estate.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "emails")
public class Email {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long idLong;@Column(name = "email")
	private String emailString;@Column(name = "status")
	private Integer statusInteger;
	
	
	public Email() {
		
	}
	
	public Email(String emailString) {
		super();
		this.emailString = emailString;
	}

	public Email(Long idLong, String emailString, Integer statusInteger) {
		super();
		this.idLong = idLong;
		this.emailString = emailString;
		this.statusInteger = statusInteger;
	}

	public Long getIdLong() {
		return idLong;
	}
	public void setIdLong(Long idLong) {
		this.idLong = idLong;
	}
	public String getEmailString() {
		return emailString;
	}
	public void setEmailString(String emailString) {
		this.emailString = emailString;
	}
	public Integer getStatusInteger() {
		return statusInteger;
	}
	public void setStatusInteger(Integer statusInteger) {
		this.statusInteger = statusInteger;
	}
	
	
}
