package Repository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import entity.Entity;
import org.springframework.stereotype.Service;
import Repository.repo;
@Service
public class repo {
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
