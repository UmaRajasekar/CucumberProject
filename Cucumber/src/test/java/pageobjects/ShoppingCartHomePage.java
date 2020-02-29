package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ShoppingCartHomePage {
	
	private WebDriver driver;
	private By searchVeg=By.xpath("//input[@type='search']");
	private By firstProductName=By.xpath("//h4[@class='product-name']");
	private By incrementFirstProduct=By.cssSelector("a.increment");
	private By addToCartButton=By.xpath("//button[contains(text(),'ADD TO CART')]");
	private By cartImage=By.xpath("//img[@alt='Cart']");
	private By proceedToCheckout=By.xpath("//button[contains(text(),'PROCEED TO CHECKOUT')]");
	
	public ShoppingCartHomePage(WebDriver driver) {
		this.driver=driver;
	}
	
	public WebElement getSearchElement() {
		return driver.findElement(searchVeg);
	}
	
	public WebElement getFirstElement() {
		return driver.findElement(firstProductName);
	}
	
	public WebElement getIncrementFirstProduct() {
		return driver.findElement(incrementFirstProduct);
	}
	
	public WebElement getAddToCartButton() {
		return driver.findElement(addToCartButton);
	}
	
	public WebElement getCartImage() {
		return driver.findElement(cartImage);
	}
	
	public WebElement getProceedToCheckout() {
		return driver.findElement(proceedToCheckout);
	}

}
