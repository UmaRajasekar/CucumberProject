package Automation.Cucumber;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {
	
	public static WebDriver driver;
	public static Properties prop;

	public static WebDriver getDriver() throws IOException {
		prop=new Properties();
		FileInputStream fis=new FileInputStream(new File("src\\test\\java\\global.properties"));        
        prop.load(fis);
		System.setProperty("webdriver.chrome.driver","C:\\Temp\\ChromeDriver\\chromedriver.exe");
        driver=new ChromeDriver();
        
        
		return driver;
	}

	public static void setDriver(WebDriver driver) {
		Base.driver = driver;
	}

}
