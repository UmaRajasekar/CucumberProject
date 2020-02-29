Feature: Test WikiPedia page
@RegTest
Scenario: Test India Countries wiki page
Given A browser is opened
When A "India" Wiki "https://en.wikipedia.org/wiki/India" is entered 
Then A web page opened with "India" displayed in block letters
And Article and Talk tabs are displayed - "true"
@ProgTest
Scenario: Test Russia Countries wiki page
Given A browser is opened
When A "Russia" Wiki "https://en.wikipedia.org/wiki/Russia" is entered 
Then A web page opened with "Russia" displayed in block letters
And Article and Talk tabs are displayed - "true"
@SmokeTest
Scenario: Test Wiki page sign up
Given A browser is opened
When A "Wiki Home page" Wiki "https://en.wikipedia.org/w/index.php?title=Special:CreateAccount&returnto=Main+Page&campaign=loginCTA" is entered and click create account is mentioned
|Rajasekar|password|password|rajasekar@gmail.com|capcha_image_letter|
Then A wikipedia account is created
@ProgTest
Scenario Outline: Test different Countries wiki page
Given A browser is opened
When For a <countryName>, Wiki page <wikipedia_link> is displayed
Then A webpage opened with <countryName> displayed in block letters
And Article and Talk tabs are displayed - "true"

Examples: Testing with different test data
|countryName|wikipedia_link|
|China|https://en.wikipedia.org/wiki/China|
|Afghanistan|https://en.wikipedia.org/wiki/Afghanistan|
|Bangaladesh|https://en.wikipedia.org/wiki/Bangaladesh|
|Pakistan|https://en.wikipedia.org/wiki/Pakistan|

