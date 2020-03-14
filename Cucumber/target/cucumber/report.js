$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/NonWikiReport.featur);
formatter.feature({
  "line": 1,
  "name": "Test WikiPedia page",
  "description": "",
  "id": "test-wikipedia-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 75000,
  "status": "passed"
});
formatter.beformatter.before({
  "duration": 48500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Opening a browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Initiating a selenium driver",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Chrome browser is opened",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "opening browser should be validated",
  "keyword": "Then "
});
formatter.match({
  "location": "IndiaReport.initiating_a_selenium_driver()"
});
formatter.result({
  "duration": 964993300,
  "status": "passed"
});
formatter.match({
  "location": "IndiaReport.chrome_browser_is_opened()"
});
formatter.result({
  "duration": 274300,
  "status": "passed"
});
formatter.match({
  "location": "IndiaReport.opening_browser_should_be_validated()"
});
formatter.result({
  "duration": 91700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Test India Countries wiki page",
  "description": "",
  "id": "test-non-wikipedia-page;test-india-countries-wiki-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "In google landing page using url \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "keyword \"wiki\" is entered in search bar",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Results should be available under below sections:",
  "rows": [
    {
      "cells": [
        "All",
        "News",
        "Images",
        "Videos",
        "Maps",
        "More"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 34
    }
  ],
  "location": "IndiaReport.in_google_landing_page_using_url_something(String)"
});
formatter.result({
  "duration": 1890300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wiki",
      "offset": 9
    }
  ],
  "location": "IndiaReport.keyword_something_is_entered_in_search_bar(String)"
});
formatter.result({
  "duration": 1706500,
  "status": "passed"
});
formatter.match({
  "location": "IndiaReport.results_should_be_available_under_below_sections(DataTable)"
});
formatter.result({
  "duration": 573100,
  "status": "passed"
});
formatter.before({
  "duration": 46500,
  "status": "passed"
});
formatter.before({
  "duration": 20600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Opening a browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Initiating a selenium driver",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Chrome browser is opened",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "opening browser should be validated",
  "keyword": "Then "
});
formatter.match({
  "location": "IndiaReport.initiating_a_selenium_driver()"
});
formatter.result({
  "duration": 61000,
  "status": "passed"
});
formatter.match({
  "location": "IndiaReport.chrome_browser_is_opened()"
});
formatter.result({
  "duration": 313700,
  "status": "passed"
});
formatter.match({
  "location": "IndiaReport.opening_browser_should_be_validated()"
});
formatter.result({
  "duration": 75500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Test India Countries wiki page",
  "description": "",
  "id": "test-non-wikipedia-page;test-india-countries-wiki-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "In google landing page using url \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "keyword \"wiki\" is entered in search bar",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Results should be available under below sections:",
  "rows": [
    {
      "cells": [
        "All",
        "News",
        "Images",
        "Videos",
        "Maps",
        "More"
      ],
      "line": 22
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 34
    }
  ],
  "location": "IndiaReport.in_google_landing_page_using_url_something(String)"
});
formatter.result({
  "duration": 244800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wiki",
      "offset": 9
    }
  ],
  "location": "IndiaReport.keyword_something_is_entered_in_search_bar(String)"
});
formatter.result({
  "duration": 217000,
  "status": "passed"
});
formatter.match({
  "location": "IndiaReport.results_should_be_available_under_below_sections(DataTable)"
});
formatter.result({
  "duration": 455600,
  "status": "passed"
});
});    {
      "val": "https://en.wikipedia.org/w/index.php?title\u003dSpecial:CreateAccount\u0026returnto\u003dMain+Page\u0026campaign\u003dloginCTA",
      "offset": 25
    }
  ],
  "location": "IndiaReport.a_something_wiki_something_is_entered_and_click_create_account_is_mentioned(String,String,DataTable)"
});
formatter.result({
  "duration": 2045600,
  "status": "passed"
});
formatter.match({
  "location": "IndiaReport.a_wikipedia_account_is_created()"
});
formatter.result({
  "duration": 63800,
  "status": "passed"
});
formatter.after({
  "duration": 67600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Test different Countries wiki page",
  "description": "",
  "id": "test-wikipedia-page;test-different-countries-wiki-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@ProgTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "A browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "For a \u003ccountryName\u003e, Wiki page \u003cwikipedia_link\u003e is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "A webpage opened with \u003ccountryName\u003e displayed in block letters",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Article and Talk tabs are displayed - \"true\"",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "Testing with different test data",
  "description": "",
  "id": "test-wikipedia-page;test-different-countries-wiki-page;testing-with-different-test-data",
  "rows": [
    {
      "cells": [
        "countryName",
        "wikipedia_link"
      ],
      "line": 28,
      "id": "test-wikipedia-page;test-different-countries-wiki-page;testing-with-different-test-data;1"
    },
    {
      "cells": [
        "China",
        "https://en.wikipedia.org/wiki/China"
      ],
      "line": 29,
      "id": "test-wikipedia-page;test-different-countries-wiki-page;testing-with-different-test-data;2"
    },
    {
      "cells": [
        "Afghanistan",
        "https://en.wikipedia.org/wiki/Afghanistan"
      ],
      "line": 30,
      "id": "test-wikipedia-page;test-different-countries-wiki-page;testing-with-different-test-data;3"
    },
    {
      "cells": [
        "Bangaladesh",
        "https://en.wikipedia.org/wiki/Bangaladesh"
      ],
      "line": 31,
      "id": "test-wikipedia-page;test-different-countries-wiki-page;testing-with-different-test-data;4"
    },
    {
      "cells": [
        "Pakistan",
        "https://en.wikipedia.org/wiki/Pakistan"
      ],
      "line": 32,
      "id": "test-wikipedia-page;test-different-countries-wiki-page;testing-with-different-test-data;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 54000,
  "status": "passed"
});
formatter.before({
  "duration": 37900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Test different Countries wiki page",
  "description": "",
  "id": "test-wikipedia-page;test-different-countries-wiki-page;testing-with-different-test-data;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@ProgTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "A browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "For a China, Wiki page https://en.wikipedia.org/wiki/China is displayed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "A webpage opened with China displayed in block letters",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Article and Talk tabs are displayed - \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "IndiaReport.a_browser_is_opened()"
});
formatter.result({
  "duration": 48300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "China",
      "offset": 6
    },
    {
      "val": "https://en.wikipedia.org/wiki/China",
      "offset": 23
    }
  ],
  "location": "IndiaReport.for_a_wiki_page_is_displayed(String,String)"
});
formatter.result({
  "duration": 126700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "China",
      "offset": 22
    }
  ],
  "location": "IndiaReport.a_webpage_opened_with_displayed_in_block_letters(String)"
});
formatter.result({
  "duration": 125400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 39
    }
  ],
  "location": "IndiaReport.article_and_talk_tabs_are_displayed_something(String)"
});
formatter.result({
  "duration": 118300,
  "status": "passed"
});
formatter.before({
  "duration": 51400,
  "status": "passed"
});
formatter.before({
  "duration": 41000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Test different Countries wiki page",
  "description": "",
  "id": "test-wikipedia-page;test-different-countries-wiki-page;testing-with-different-test-data;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@ProgTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "A browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "For a Afghanistan, Wiki page https://en.wikipedia.org/wiki/Afghanistan is displayed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "A webpage opened with Afghanistan displayed in block letters",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Article and Talk tabs are displayed - \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "IndiaReport.a_browser_is_opened()"
});
formatter.result({
  "duration": 73400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Afghanistan",
      "offset": 6
    },
    {
      "val": "https://en.wikipedia.org/wiki/Afghanistan",
      "offset": 29
    }
  ],
  "location": "IndiaReport.for_a_wiki_page_is_displayed(String,String)"
});
formatter.result({
  "duration": 120900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Afghanistan",
      "offset": 22
    }
  ],
  "location": "IndiaReport.a_webpage_opened_with_displayed_in_block_letters(String)"
});
formatter.result({
  "duration": 114900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 39
    }
  ],
  "location": "IndiaReport.article_and_talk_tabs_are_displayed_something(String)"
});
formatter.result({
  "duration": 110600,
  "status": "passed"
});
formatter.before({
  "duration": 58100,
  "status": "passed"
});
formatter.before({
  "duration": 44700,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Test different Countries wiki page",
  "description": "",
  "id": "test-wikipedia-page;test-different-countries-wiki-page;testing-with-different-test-data;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@ProgTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "A browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "For a Bangaladesh, Wiki page https://en.wikipedia.org/wiki/Bangaladesh is displayed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "A webpage opened with Bangaladesh displayed in block letters",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Article and Talk tabs are displayed - \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "IndiaReport.a_browser_is_opened()"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangaladesh",
      "offset": 6
    },
    {
      "val": "https://en.wikipedia.org/wiki/Bangaladesh",
      "offset": 29
    }
  ],
  "location": "IndiaReport.for_a_wiki_page_is_displayed(String,String)"
});
formatter.result({
  "duration": 161900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangaladesh",
      "offset": 22
    }
  ],
  "location": "IndiaReport.a_webpage_opened_with_displayed_in_block_letters(String)"
});
formatter.result({
  "duration": 94900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 39
    }
  ],
  "location": "IndiaReport.article_and_talk_tabs_are_displayed_something(String)"
});
formatter.result({
  "duration": 154500,
  "status": "passed"
});
formatter.before({
  "duration": 49400,
  "status": "passed"
});
formatter.before({
  "duration": 30200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Test different Countries wiki page",
  "description": "",
  "id": "test-wikipedia-page;test-different-countries-wiki-page;testing-with-different-test-data;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@ProgTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "A browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "For a Pakistan, Wiki page https://en.wikipedia.org/wiki/Pakistan is displayed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "A webpage opened with Pakistan displayed in block letters",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Article and Talk tabs are displayed - \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "IndiaReport.a_browser_is_opened()"
});
formatter.result({
  "duration": 73500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pakistan",
      "offset": 6
    },
    {
      "val": "https://en.wikipedia.org/wiki/Pakistan",
      "offset": 26
    }
  ],
  "location": "IndiaReport.for_a_wiki_page_is_displayed(String,String)"
});
formatter.result({
  "duration": 231300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pakistan",
      "offset": 22
    }
  ],
  "location": "IndiaReport.a_webpage_opened_with_displayed_in_block_letters(String)"
});
formatter.result({
  "duration": 140800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 39
    }
  ],
  "location": "IndiaReport.article_and_talk_tabs_are_displayed_something(String)"
});
formatter.result({
  "duration": 200700,
  "status": "passed"
});
});