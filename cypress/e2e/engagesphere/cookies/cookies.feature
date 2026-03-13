Feature: Cookies consent Banner

  
  Background:
    Given I access the Engagesphere app without any cookies set
    And I see the cookie consent banner

  @engagesphere
  Scenario: Consents to the cookies policies
    When I click on the Accept button
    Then the cookies banner is closed
    And the cookie consent is set with the value accepted

  Scenario: Declines to the cookies policies
    When I click on the decline button
    Then the cookies banner is closed
    And the cookie consent is set with the value declined