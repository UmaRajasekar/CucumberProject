Feature: Test Non-WikiPedia page


Background: Opening a browser
Given Initiating a selenium driver
When Chrome browser is opened
Then opening browser should be validated

@RegTest
Scenario: Test India Countries wiki page
Given In google landing page using url "https://www.google.com/"
When keyword "wiki" is entered in search bar
Then Results should be available under below sections:
|All|News|Images|Videos|Maps|More|


@RegTest
Scenario: Test India Countries wiki page
Given In google landing page using url "https://www.google.com/"
When keyword "wiki" is entered in search bar
Then Results should be available under below sections:
|All|News|Images|Videos|Maps|More|