package stepDefinitions;

import Automation.Cucumber.Base;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Base{
	
	@Before("@SmokeTest")
	public void beforeSmokeTest() {
		System.out.println("To execute before Smoke test");
	}
	@After("@SmokeTest")
	public void afterSmokeTest() {
		System.out.println("To execute after Smoke test");
	}
	
	@After("@SeleniumTest")
	public void afterSeleniumTest() {
		driver.close();
	}
	
	@Before
	public void beforeSmoke() {
		System.out.println("Before 1");
	}
	
	@Before
	public void beforeSmoke1() {
		System.out.println("Before 2");
	}

}
