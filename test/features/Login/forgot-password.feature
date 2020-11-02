Feature: User login functionality for Vacations Management system

	As a user of the Vacations Management system
    I want to follow the Forgot Password flow
    
    Background:
        Given   I am on the Forgot Password page "https://vacations-management.herokuapp.com/users/password/new"

    Scenario: User can navigate to Login page from Forgot Password page
        When    I click the Sign In button from the Forgot Password Page
        Then    I should see the Login page

    Scenario: User cannot submit the Forgot Password form with and invalid email
        When    I enter my Email "example@email.test" in the Forgot Password page
        And     I submit the Forgot Password page
        Then    I should see the error message "Email not found"
    
    Scenario: User cannot submit the Forgot Password form with and empty email
        When    I submit the Forgot Password page
        Then    I should see the error message "Email can't be blank"
    
# # TO-DO
    # # I'll leave this scenario commented by now as there is no specification regarding what should happen after a successfull submit
    # Scenario: User can submit the Forgot Password form with valid email
    #     When    I enter my Email "https://vacations-management.herokuapp.com/users/sign_in" in the Forgot Password page
    #     And     I submit the Forgot Password page
    #     Then    I should see the successfully reseted my password message # At this point I'm not sure of what the behaviour should be on this step
