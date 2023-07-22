package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.loginModel;
import com.example.demo.Repository.loginRepo;
@Service
public class loginserve {
	@Autowired(required=true)
	loginRepo Rs;
	public loginModel saveDetailss(loginModel e)
	{
	return Rs.save(e);
	}
	public List<loginModel> getDetailss(){
	return Rs.findAll();
	}
	public loginModel updateDetailss(loginModel e) {
	return Rs.saveAndFlush(e);
	}
	public void deleteDetailss(int id) {
	Rs.deleteById(id);

	}
}
