package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features= "src/test/java/features/IndiaReport.feature",
	glue="stepDefinitions",
	tags="@ProgTest,@RegTest,@SmokeTest",
	//tags="@SeleniumTest",
	
	plugin= {"pretty",
			"html:target/cucumber",
			"json:target/cucumber.json",
			"junit:target/cucumber.xml"
	},
	monochrome=true,
	strict=true
	//,dryRun=true
)
public class ParallelTestRunner {

}
