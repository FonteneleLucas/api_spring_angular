package com.example.demo.repository;

import org.springframework.stereotype.Repository;

import com.example.demo.model.Company;

import org.springframework.data.jpa.repository.JpaRepository;



@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {
	
}


