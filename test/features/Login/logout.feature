Feature: User logout functionality for Vacations Management system

	As a user of the Vacations Management system
    I want to logout from the application.

    Background:
        Given   I am on the Login page "https://vacations-management.herokuapp.com/users/sign_in"
        And     I enter my Email "gap-automation-test@mailinator.com" in the Login page
        And     I enter my Password "12345678" in the Login page
        And     I submit the Login page
        And     I should see the banner "Signed in successfully."

    Scenario: User can Logout from the Employees Information page
        When    I click the Logout button in the Employees Information page
        Then    I should see the Login page

    Scenario: User can Logout from the Employees Information Create page
        When    I click the Create New Employee button
        And     I click the Logout button in the Information Create page Create page
        Then    I should see the Login page

    Scenario: User can Logout from the Administrative Users page
        When    I click the Administrative Users menu option
        And     I click the Logout button in the Administrative Users page
        Then    I should see the Login page
    
    Scenario: User can Logout from the Administrative Users Create page
        When    I click the Administrative Users menu option
        And     I click the Create New Admin User button
        And     I click the Logout button in the Administrative Users Create page
        Then    I should see the Login page

    Scenario: User can Logout from the Account page
        When    I click My Account menu option
        And     I click the Logout button in the Account page
        Then    I should see the Login page

# # TO-DO
    # Scenario: User can logout from the User Details page