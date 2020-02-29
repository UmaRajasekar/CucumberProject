package stepDefinitions;

import org.junit.Assert;

import Automation.Cucumber.Base;
import cucumber.api.java.en.Then;
import pageobjects.ProceedToCheckOut;

public class CheckOutPage extends Base{
	
	@Then("^Check whether selected (.+) is available in checkout page$")
    public void check_whether_selected_something_is_available_in_checkout_page(String strArg1) throws Throwable {
    	ProceedToCheckOut ptco=new ProceedToCheckOut(driver);
    	Assert.assertTrue(ptco.getFirstCheckedPrduct().getText().contains(strArg1));
    }

}
