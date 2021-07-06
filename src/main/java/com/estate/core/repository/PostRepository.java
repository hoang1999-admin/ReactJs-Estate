/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jul 2, 2021
 * @hour 9:50:22 AM
*/


package com.estate.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>{
	@Query(value = "SELECT * FROM posts WHERE category_id = 1 AND status = '1'", nativeQuery = true)
	public List<Post> findsale();
	@Query(value = "SELECT * FROM posts WHERE category_id = 2 AND status = '1'", nativeQuery = true)
	public List<Post> findartiher();
	@Query(value = "SELECT * FROM posts WHERE category_id = 3 AND status = '1'", nativeQuery = true)
	public List<Post> findhome();
	@Query(value = "SELECT * FROM posts WHERE category_id = 4 AND status = '1'", nativeQuery = true)
	public List<Post> findfend();
	@Query(value = "SELECT * FROM posts WHERE category_id = 5 AND status = '1'", nativeQuery = true)
	public List<Post> findexpen();
	@Query(value = "SELECT * FROM posts WHERE category_id = 6 AND status = '1'", nativeQuery = true)
	public List<Post> findbuld();
	@Query(value = "SELECT * FROM posts WHERE category_id = 8 AND status = '1'", nativeQuery = true)
	public List<Post> findnew();
	@Query(value = "SELECT * FROM posts WHERE category_id = 9 AND status = '1'", nativeQuery = true)
	public List<Post> findnew1();
	@Query(value = "SELECT * FROM posts WHERE category_id = 10 AND status = '1'", nativeQuery = true)
	public List<Post> findnew2();
	@Query(value = "SELECT * FROM posts WHERE category_id = 11 AND status = '1'", nativeQuery = true)
	public List<Post> findnew3();
}
