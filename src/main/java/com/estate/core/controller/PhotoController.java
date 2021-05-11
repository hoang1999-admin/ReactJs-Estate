/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 10, 2021
 * @hour 8:13:19 PM
*/


package com.estate.core.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estate.core.entity.Photo;
import com.estate.core.repository.PhotoRepository;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "https://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class PhotoController {

	@Autowired
	private PhotoRepository photoRepository;
	
	@GetMapping("/photo")
	public List<Photo> getPhoto()
	{
		return photoRepository.getPhoto();
	}
}
