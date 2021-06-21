/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 13, 2021
 * @hour 3:51:40 PM
*/


package com.estate.core.services.categoryservices;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estate.core.entity.Category;
import com.estate.core.repository.CategoryRepository;

@Service
@Transactional
public class CategoryServicesImpl  implements CategoryServices{

	@Autowired
	private CategoryRepository categoryRepository;
	@Override
	public List<Category> findTopN(int n) {
		return categoryRepository.findTopN(n);
	}

}
