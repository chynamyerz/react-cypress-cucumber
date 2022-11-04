Feature: Login
  # Scenario: Test loginin
  #   Given I navigate to the app login page
  #   When I enter username test
  #   When I enter password test123
  #   When I click login
  #   Then I should be presented with Logged in successfully

  # Scenario: Test loginin fails
  #   Given I navigate to the app login page
  #   When I enter username test1
  #   When I enter password test123
  #   When I click login
  #   Then I should be presented with Logged in failed

  Scenario Outline: Test logingin
    Given I navigate to the app login page
    When I enter username <username>
    When I enter password <password>
    When I click login
    Then I should be presented with <message>
    Examples:
      | username | password | message                |
      | test     | test123  | Logged in successfully |
      | test1    | test123  | Logged in failed       |