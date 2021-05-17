/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 13, 2021
 * @hour 3:51:40 PM
*/


package com.estate.core.servicesImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estate.core.entity.Category;
import com.estate.core.repository.CategoryRepository;
import com.estate.core.services.CategoryService;

@Service
@Transactional
public class CategoryServiceImpl  implements CategoryService{

	@Autowired
	private CategoryRepository categoryRepository;
	@Override
	public List<Category> findTopN(int n) {
		return categoryRepository.findTopN(n);
	}

}
