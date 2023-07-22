package com.example.demo.Entity;

import org.springframework.web.bind.annotation.CrossOrigin;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@CrossOrigin("*")
@Entity
@Table(name="Login")

public class loginModel {
	@Id
	@GeneratedValue
	private int id;


	@Column(name="Email")
	private String email;
	@Column(name="Password")
	private String password;



	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
	return email;
	}
	public void setEmail(String email) {
	this.email = email;
	}
	public String getPassword() {
	return password;
	}
	public void setPassword(String password) {
	this.password = password;
	}
	public loginModel( String email, String password) {
	super();
	this.email = email;
	this.password = password;
	}
	    public loginModel() {
	   
	    }
}
