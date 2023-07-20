package com.example.demo.Controlle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Model;
import com.example.demo.Services.serve;



@RestController
public class Control {
@Autowired
serve ser;

@PostMapping("/addDetails")
public Model addinfo(@RequestBody Model st)
{
return ser.saveDetails(st);
}
@GetMapping("/showDetails")
public List<Model> fetchDetails()
{
return ser.getDetails();
}
@PutMapping("/updateDetails")
public Model updateInfo(@RequestBody Model st)
{
return ser.updateDetails(st);
}
@DeleteMapping("/deleteDetails/{username}")
String deleteInfo(@PathVariable("username") String username){
ser.deleteDetails(username);
return "Deleted the data";
}
//
}