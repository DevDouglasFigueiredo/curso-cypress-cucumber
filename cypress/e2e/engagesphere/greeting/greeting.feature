Feature: Greeting

  Background: 
    Given I access the Engagesphere app having already accepted the cookies banner  

  @engagesphere @smoke 
  Scenario: shows default greeting 
    Then I see the following greeting: Hi there!

  Scenario: shows a customized greeting
    When I type "<name>" into the name input field
    Then I see the following greeting Hi "<name>" !

    Examples:
      | name |
      | Jhon  |
      | Pedro |