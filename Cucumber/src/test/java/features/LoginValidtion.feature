Feature: Testing login feature of Gmail website

@GmailTest
Scenario: Test Login functionality
Given User is on Gmail login page using url "https://accounts.google.com/"
When User enters "rajasekar.puniyamoorthy@gmail.com" and clicks Next
And user enters "password" and clicks Next
Then Gmail Home page is displayed

@GmailTest
Scenario Outline: Test Login functionality
Given User is on Gmail login page using url "https://accounts.google.com/"
When User enters <username> and clicks Next
And user enters <password> and clicks Next
Then Gmail Home page is displayed

Examples:
|username|password|
|rajasekar.puniyamoorthy@gmail.com|password|
|rajasekar.puniyamoorthy@gmail.com|password|