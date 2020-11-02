//import { Given, When, Then } from 'cucumber';
import employeeList from '../../pageObjects/employees-information/employee-list.page';
const { Given, Then, When } = require('cucumber');

Given(/^I am on the Employees Information page "([^"]*)"$/, function(url) {
  employeeList.openUrl(url);
});

When("I click My Account menu option", function() {
  employeeList.goToMyAccount();
});

When("I click the Administrative Users menu option", function() {
  employeeList.goToAdminUsers();
});

When("I click the Create New Employee button", function() {
  employeeList.goToCreateNewEmployee();
});

When("I click the Logout button in the Employees Information page", function() {
  employeeList.logout();
});

When(/^I click the Delete button for a specific user "([^"]*)"$/, function(userData){
  employeeList.deleteUser(employeeList.getUserRow(userData), userData); 
});

Then(/^I should see the banner "([^"]*)"$/, function(message){
  expect(employeeList.getBannerText()).to.equal(message); 
});

Then("I should see the employees Information logo", function() {
  expect(employeeList.isEmployeesInformationLogo()).to.equal(true);
});

Then("I should see the User already logged in", function(){
  expect(employeeList.isUserLoggedIn()).to.equal(true); 
});

Then(/^I should see the user information in the list of employees "([^"]*)"$/, function(userData){
  expect(employeeList.isUserInList(employeeList.getUserRow(userData), userData)).to.equal(true); 
});

Then(/^I should not see the user information in the list of employees "([^"]*)"$/, function(userData){
  expect(employeeList.isUserInList(employeeList.getUserRow(userData), userData)).to.equal(false); 
});

// TO-DO 