//import { Given, When, Then } from 'cucumber';
import adminList from '../../pageObjects/admin-users/admin-list.page';
const { Given, Then, When } = require('cucumber');

When("I click the Logout button in the Administrative Users page", function() {
    adminList.logout();
});

When("I click the Create New Admin User button", function() {
    adminList.goToCreateNewAdmin();
  });

// // TO-DO 