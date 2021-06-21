/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 4, 2021
 * @hour 8:56:31 PM
*/


package com.estate.core.services.userservices;

import org.springframework.stereotype.Service;

import com.estate.core.entity.User;



@Service
public interface UserServices {
	public User existsByEmail(String email) throws Exception;
	public User existsByUserName(String username) throws Exception;
	

}
