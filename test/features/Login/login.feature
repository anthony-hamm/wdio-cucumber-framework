Feature: User login functionality for Vacations Management system

	As a user of the Vacations Management system
    I want to login and see the homepage.
    
    Background:
        Given   I am on the Login page "https://vacations-management.herokuapp.com/users/sign_in"

    Scenario Outline: User cannot login with invalid email or password
        When    I enter my Email "<email>" in the Login page
        And     I enter my Password "<password>" in the Login page
        And     I submit the Login page
        Then    I should see the Login page
        Examples: 
            |                  email                |      password     |
            | example@email.test                    |   12345678        |
            | gap-automation-test@mailinator.com    |   examplePass     |

    Scenario: User can login with valid credentials
        When    I enter my Email "gap-automation-test@mailinator.com" in the Login page
        And     I enter my Password "12345678" in the Login page
        And     I submit the Login page
        Then    I should see the banner "Signed in successfully."
        And     I should see the employees Information logo
        And     I should see the User already logged in


# # TO-DO
# Scenario: User cannot login with invalid email or password (case sensitive)

# # I do know the above scenario is easy to implement, this is just
# # a example of how I would manage TO-DO's in my features files