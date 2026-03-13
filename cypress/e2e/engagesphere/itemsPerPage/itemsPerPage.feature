Feature: items per page

  Background: 
    Given I access the Engagesphere app having already accepted the cookies banner  

  @engagesphere
  Scenario: shows the correct number of items per page
    When I filter by  "<number>" item per page 
    Then I see "<number>" table rows

    Examples:
      | number |
      | 5      |
      | 10     |
      | 20     |
      | 50     |