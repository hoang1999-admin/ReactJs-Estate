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
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estate.core.entity.Photo;
import com.estate.core.repository.PhotoRepository;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class PhotoController {

	@Autowired
	private PhotoRepository photoRepository;
	
	@GetMapping("/photo")
	public List<Photo> getPhoto( )
	{
		return photoRepository.findAll();
	}
	@GetMapping("/photo/index={id}")
	public List<Photo> getPhotoId( @PathVariable long id)
	{
		return photoRepository.findByProductidLong(id);
	}
	@PostMapping("/photo")
    Photo createPhoto(@Validated @RequestBody Photo photo){
        return photoRepository.save(photo);
    }
}
