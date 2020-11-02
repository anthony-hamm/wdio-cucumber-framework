//import { Given, When, Then } from 'cucumber';
import account from '../../pageObjects/account/account';
const { Given, Then, When } = require('cucumber');

When("I click the Logout button in the Account page", function() {
    account.logout();
});

// // TO-DO 