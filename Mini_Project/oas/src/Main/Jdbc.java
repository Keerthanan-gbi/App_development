package Main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Jdbc {
	 public static Connection getConnection() throws ClassNotFoundException, SQLException {
	        Class.forName("com.mysql.cj.jdbc.Driver");
	        String url = "jdbc:mysql://localhost:3306/gbi";
	        String username = "root";
	        String password = "9443891305aA@";
	        return DriverManager.getConnection(url, username, password);
	    }
}
