package com.estate.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.estate.core.entity.PageDetail;

@Repository
public interface PageDetailRepository extends JpaRepository<PageDetail, Long>{

}
