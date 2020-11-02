//import { Given, When, Then } from 'cucumber';
import adminCreate from '../../pageObjects/admin-users/admin-create.page';
const { Given, Then, When } = require('cucumber');

When("I click the Logout button in the Administrative Users Create page", function() {
    adminCreate.logout();
});

// // TO-DO 