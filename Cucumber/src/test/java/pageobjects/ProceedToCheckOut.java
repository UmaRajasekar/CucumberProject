package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ProceedToCheckOut {
	
	private WebDriver driver;
	private By firstCheckedProduct=By.cssSelector("p.product-name");
	
	public ProceedToCheckOut(WebDriver driver) {
		this.driver=driver;
	}
	
	public WebElement getFirstCheckedPrduct() {
		return driver.findElement(firstCheckedProduct);
	}

}
