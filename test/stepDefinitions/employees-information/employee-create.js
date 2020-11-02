//import { Given, When, Then } from 'cucumber';
import employeeCreate from '../../pageObjects/employees-information/employee-create.page';
const { Given, Then, When } = require('cucumber');

When(/^I enter my First Name "([^"]*)" in the create new employee user page$/, function(firstName) {
  employeeCreate.insertFirstName(firstName);
});

When(/^I enter my Last Name "([^"]*)" in the create new employee user page$/, function(lastName) {
  employeeCreate.insertLastName(lastName);
});

When(/^I enter my Email "([^"]*)" in the create new employee user page$/, function(email) {
  employeeCreate.insertEmail(email);
});

When(/^I enter my Identification "([^"]*)" in the create new employee user page$/, function(identification) {
  employeeCreate.insertIdentification(identification);
});

When(/^I enter my Leader Name "([^"]*)" in the create new employee user page$/, function(leader) {
  employeeCreate.insertLeaderName(leader);
});

When(/^I enter my Entry Date "([^"]*)" in the create new employee user page$/, function(date) {
  employeeCreate.insertEntryDate(date);
});

When("I submit the create new employee user form", function() {
  employeeCreate.submitCreateUser();
});

When("I click the Logout button in the Information Create page Create page", function() {
  employeeCreate.logout();
});

Then(/^I should see the message "([^"]*)" in the user Detail page$/, function(text){
  expect(employeeCreate.getSuccessfullMessage()).to.equal(text); 
});

// TO-DO 
