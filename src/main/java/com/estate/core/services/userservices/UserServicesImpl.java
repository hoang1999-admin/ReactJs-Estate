/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 4, 2021
 * @hour 8:56:06 PM
*/


package com.estate.core.services.userservices;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estate.core.entity.User;
import com.estate.core.repository.UserRepository;


@Service
@Transactional
public class UserServicesImpl implements UserServices{

	@Autowired
	UserRepository userRepo;

	@Override
	public User existsByEmail(String email) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User existsByUserName(String username) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	

}
