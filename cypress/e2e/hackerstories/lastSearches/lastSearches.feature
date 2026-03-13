Feature: Search

    @hackerstories
    Scenario: shows the last searches
        Given I access the Hacker Stories web app
        When I search for these terms
            | Java | Angular | Selenium | Playwright |  Vue |
        Then I see "5" buttons, one for each of the last searched terms
            