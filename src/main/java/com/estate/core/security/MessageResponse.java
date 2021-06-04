/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 3, 2021
 * @hour 3:01:22 PM
*/


package com.estate.core.security;

public class MessageResponse {
	private String message;

	public MessageResponse(String message) {
	    this.message = message;
	  }

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
