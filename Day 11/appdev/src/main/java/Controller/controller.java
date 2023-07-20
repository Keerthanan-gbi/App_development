package Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import Services.service;
import entity.Entity;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class controller {
	 @Autowired
	 service ser;	
	 @PostMapping("/addDetails") 
	 public Entity addinfo(@RequestBody Entity st)
	 {
	  return ser.saveDetails(st);
	 }
	 @GetMapping("/showDetails")
	 public List<Entity> fetchDetails()
	 {
	  return ser.getDetails();
	 }
	 @PutMapping("/updateDetails")
	  public Entity updateInfo(@RequestBody Entity st)
	  {
	   return ser.updateDetails(st);
	  }
	 @DeleteMapping("/deleteDetails/{username}")
	  String deleteInfo(@PathVariable("username") String username){
	  ser.deleteDetails(username);
	  return "Deleted the data";
	 }
}
