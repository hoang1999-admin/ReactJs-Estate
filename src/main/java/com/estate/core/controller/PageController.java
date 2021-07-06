/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jul 2, 2021
 * @hour 9:53:35 AM
*/


package com.estate.core.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estate.core.entity.Page;
import com.estate.core.exception.ResourceNotFoundException;
import com.estate.core.repository.PageReponsitory;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PageController {
	@Autowired
	private PageReponsitory pageRepository;
	@GetMapping("/pages")
	public List<Page> getListPagepages()
	{
		return pageRepository.findAll();
	}
	@GetMapping("/pages1")
	public List<Page> getListPagepages1()
	{
		return pageRepository.findsale();
	}
	@GetMapping("/pages2")
	public List<Page> getListPagepages2()
	{
		return pageRepository.findartiher();
	}
	@GetMapping("/pages3")
	public List<Page> getListPagepages3()
	{
		return pageRepository.findhome();
	}
	@GetMapping("/pages4")
	public List<Page> getListPagepages4()
	{
		return pageRepository.findfend();
	}
	@GetMapping("/pages5")
	public List<Page> getListPagepages5()
	{
		return pageRepository.findexpen();
	}
	
	@GetMapping("/pages6")
	public List<Page> getListPagepages6()
	{
		return pageRepository.findbuld();
	}
	@GetMapping("/pages7")
	public List<Page> getListPagepages7()
	{
		return pageRepository.findnew();
	}
	@GetMapping("/pages8")
	public List<Page> getListPagepages8()
	{
		return pageRepository.findnew1();
	}
	@GetMapping("/pages9")
	public List<Page> getListPagepages9()
	{
		return pageRepository.findnew2();
	}
	@GetMapping("/pages10")
	public List<Page> getListPagepages10()
	{
		return pageRepository.findnew3();
	}
	@GetMapping("/pages/index={id}")
	public ResponseEntity<Page> getPagesId(@PathVariable Long id)
	{
		Page page = pageRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Page with not id: "+ id));
		return ResponseEntity.ok(page);
	}
}
