package Services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import Repository.repo;
import entity.Entity;
public class service {
	@Autowired(required=true)
	 repo Re;
	 public Entity saveDetails(Entity e)
	 {
	  return Re.save(e);
	 }
	 public List<Entity> getDetails(){
	  return Re.findAll();
	 } 
	 public Entity updateDetails(Entity e) {
	  return Re.saveAndFlush(e);
	 }
	 public void deleteDetails(String username) {
	  Re.deleteById(username);
	  
	 }
}
