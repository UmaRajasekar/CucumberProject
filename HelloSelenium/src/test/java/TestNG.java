package test.java;

import org.testng.annotations.Test;
import org.testng.annotations.BeforeSuite;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterSuite;

public class TestNG {
	
	public WebDriver driver;
	public WebDriverWait wait;
	
  @Test
  public void Test() {
	  
	  driver.get("https://www.google.com");
	  
	 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"tsf\"]/div[2]/div[3]/center/input[1]")));
	  assertEquals(driver.getTitle(),("Google"));
	  //System.out.print(driver.getTitle());
  }
  @BeforeSuite
  public void beforeSuite() {
	  
	  System.setProperty("webdriver.chrome.driver","C://Temp//GECKODriver//chromedriver.exe");
	  driver=new ChromeDriver();
	  wait=new WebDriverWait(driver,60);
  }

  @AfterSuite
  public void afterSuite() {
	  driver.quit();
  }

}
