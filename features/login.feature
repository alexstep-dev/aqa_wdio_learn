Feature: SwagApp LogIn

  Scenario Outline: As a user, I can log in with bad creds

    Given Set viewport size MD
    Given I am on the main page
    When  I login with <username> and <password>
    Then  I should see login failure alert

    Examples:
      | username      | password     |
      | bad_user      | bad_pass     |
      | standard_user | secret_sauce |

  Scenario: As a user, I can log in with valid creds

    Given Set viewport size MD
    Given I am on the main page
    When  I login with valid creds
    Then  I should see inventory list