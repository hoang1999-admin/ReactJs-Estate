/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 13, 2021
 * @hour 3:18:29 PM
*/


package com.estate.core.services.categoryservices;

import java.util.List;

import com.estate.core.entity.Category;

public interface CategoryServices {
	public List<Category> findTopN(int n);

}
