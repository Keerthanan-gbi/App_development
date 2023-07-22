package com.example.demo.Repository;




import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.loginModel;

public interface loginRepo extends JpaRepository<loginModel,Integer> {

}
