//import { Given, When, Then } from 'cucumber';
import login from '../../pageObjects/login/login.page';
const { Given, Then, When } = require('cucumber');

Given(/^I am on the Login page "([^"]*)"$/, function(url) {
  login.openUrl(url);
});

Given(/^I am on the Forgot Password page "([^"]*)"$/, function(url) {
  login.openUrl(url);
});

When(/^I enter my Email "([^"]*)" in the Login page$/, function(email) {
  login.insertCustomEmail(email);
});

When(/^I enter my Password "([^"]*)" in the Login page$/, function(email) {
  login.insertPassword(email);
});

When("I submit the Login page", function() {
  login.submitSignIn();
});

When("I click the Sign In button from the Forgot Password Page", function() {
  login.goToSignIn();
});

When(/^I enter my Email "([^"]*)" in the Forgot Password page$/, function(email) {
  login.insertCustomEmail(email);
});

When("I submit the Forgot Password page", function() {
  login.submitForgotPassword();
});

Then(/^I should see the error message "([^"]*)"$/, function(message){
  expect(login.getErrorMessage()).to.equal(message); 
});

Then("I should see the Login page", function() {
  expect(login.isLoginPage()).to.equal(true);
});

// TO-DO 
