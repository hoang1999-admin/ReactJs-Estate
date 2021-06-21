/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 21, 2021
 * @hour 2:50:20 PM
*/


package com.estate.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.User_Role;
@Repository
public interface User_RoleRepository extends JpaRepository<User_Role, Long>,PagingAndSortingRepository<User_Role,Long>{


}
