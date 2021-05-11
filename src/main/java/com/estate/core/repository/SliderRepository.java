/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date May 9, 2021
 * @hour 9:42:33 PM
*/


package com.estate.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.Slider;

@Repository
public interface SliderRepository extends JpaRepository<Slider, Long> {

}
