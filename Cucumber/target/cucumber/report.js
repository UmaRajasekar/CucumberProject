$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Search feature in Search Website",
  "description": "",
  "id": "testing-search-feature-in-search-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Test Searching for vegetable cucumber",
  "description": "",
  "id": "testing-search-feature-in-search-website;test-searching-for-vegetable-cucumber",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SeleniumTest1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User searches for Cucumber vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"Cucumber\" results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFeature.user_is_on_landing_page()"
});
formatter.result({
  "duration": 13596906400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 18
    }
  ],
  "location": "SearchFeature.user_searches_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3277361100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "SearchFeature.something_results_are_displayed(String)"
});
formatter.result({
  "duration": 46990800,
  "status": "passed"
});
});