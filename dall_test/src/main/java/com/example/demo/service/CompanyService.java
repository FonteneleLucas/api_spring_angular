package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.repository.CompanyRepository;
import com.example.demo.model.Company;



@Service
public class CompanyService {
	
	@Autowired
	private CompanyRepository companyRepository;
	
	

	public Company save(Company company) {
		return companyRepository.save(company);
	}
	
	public List<Company> getCompanies() {
		return companyRepository.findAll();
	}

	public void delete(int id) {
		companyRepository.deleteById(id);
	}
	
	public Optional<Company> getOne(Integer id) {
		return companyRepository.findById(id);
	}
	
	public Company updateCompany(Company company, int id) {
		Company existingCompany = companyRepository.findById(id).orElse(null);
		existingCompany.setName(company.getName());
		return companyRepository.save(existingCompany);
	}
	
	
}
