Feature: New User functionality for Vacations Management system

	As a user of the Vacations Management system
    I want to create, verify and delete a new user.
    
    Scenario Outline: User can create a new user in the Employees Information page
        Given   I am on the Login page "https://vacations-management.herokuapp.com/users/sign_in"
        And     I enter my Email "gap-automation-test@mailinator.com" in the Login page
        And     I enter my Password "12345678" in the Login page
        And     I submit the Login page
        And     I should see the banner "Signed in successfully."
        When    I click the Create New Employee button
        And     I enter my First Name "<firstName>" in the create new employee user page
        And     I enter my Last Name "<lastName>" in the create new employee user page
        And     I enter my Email "<email>" in the create new employee user page
        And     I enter my Identification "<identification>" in the create new employee user page
        And     I enter my Leader Name "<leaderName>" in the create new employee user page
        And     I enter my Entry Date "<entryDate>" in the create new employee user page
        And     I submit the create new employee user form
        Then    I should see the message "Employee was successfully created." in the user Detail page
        And     I am on the Employees Information page "https://vacations-management.herokuapp.com/employees"
        And     I should see the user information in the list of employees "<firstName>,<lastName>,<identification>,<leaderName>,<entryDate>"
       Examples: 
        | firstName  | lastName  |           email         | identification | leaderName   | entryDate  |
        |   James    |   Smith   |  james.smith@test.com   |   1234567890   | Anthony Hamm | 01-21-2014 |


    Scenario Outline: User can delete a user from the list of employees 
        Given   I am on the Employees Information page "https://vacations-management.herokuapp.com/employees"
        And     I should see the user information in the list of employees "<firstName>,<lastName>,<identification>,<leaderName>,<entryDate>"
        When    I click the Delete button for a specific user "<firstName>,<lastName>,<identification>,<leaderName>,<entryDate>"
        Then    I should not see the user information in the list of employees "<firstName>,<lastName>,<identification>,<leaderName>,<entryDate>"
       Examples: 
        | firstName | lastName  |           email         | identification | leaderName   | entryDate  |
        |   James   |   Smith   |  james.smith@test.com   |   1234567890   | Anthony Hamm | 01-21-2014 |


# TO-DO
# Scenario: User can navigate to Employees Information page with Back button
# Scenario: User cannot submit empty form
# Scenario: User cannot create duplicate users     ##This functionality is currently not in place so it won't be automated






