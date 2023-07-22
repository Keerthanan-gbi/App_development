package com.example.demo.Controlle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


import com.example.demo.Entity.loginModel;
import com.example.demo.Services.loginserve;

@CrossOrigin("*")
@RequestMapping("/")
public class loginControl {
	@Autowired
	loginserve sr;

	@PostMapping("/adddetail")
	public loginModel addinfo(@RequestBody loginModel st)
	{
	return sr.saveDetailss(st);
	}
	@GetMapping("/showDetail")
	public List<loginModel> fetchDetails()
	{
	return sr.getDetailss();
	}
	@PutMapping("/updateDetail")
	public loginModel updateInfo(@RequestBody loginModel st)
	{
	return sr.updateDetailss(st);
	}
	@DeleteMapping("/deleteDetail/{email}")
	String deleteInfo(@PathVariable("email") int id){
	sr.deleteDetailss(id);
	return "Deleted the data";
	}
}
