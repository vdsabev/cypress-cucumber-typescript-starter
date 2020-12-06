Feature: DuckDuckGo search
  As a user
  I want to perform a search
  So that I can learn more about my favorite website

  Scenario: Search for website
    Given the customer is on the "DuckDuckGo Home" page
     Then the page title should be "DuckDuckGo"

     When the customer searches for "duck duck go wikipedia"
     Then the page title should be "duck duck go wikipedia at DuckDuckGo"
      And the first result's title should be "DuckDuckGo - Wikipedia"
