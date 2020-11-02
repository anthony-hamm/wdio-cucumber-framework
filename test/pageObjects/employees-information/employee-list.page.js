import Page from '../page';

class EmployeeList extends Page {

  //define elements
  get banner()            { return $('.flash_notice'); }
  get logo()              { return $('#logo_text img'); }
  get userLoggedIn()      { return $('#user_information').$('span*=Welcome gap'); }
  get logoutBtn()         { return $('#user_information').$('a*=Logout'); }
  get adminUsersMenuBtn() { return $('#menu').$('a*=Administrative Users'); }
  get createNewUserBtn()  { return $('#content').$('a*=Create a new employee'); }
  get myAccountMenuBtn()  { return $('#menu').$('a*=My Account'); }
  get tableRowsArr()      { return $$('#content > table > tbody tr'); }

  // define or overwrite page methods

  // open provided url
  openUrl (url) {
    super.open(url);
    this.logo.waitForExist();
  }
  // retrive the text value inside the banner in Employees Information page
  getBannerText(){
    // this.banner.waitForDisplayed();
    return this.banner.getText();
  }

  // verify if the Logo in the Employees Information page is being displayed
  isEmployeesInformationLogo(){
    // this.logo.waitForExist();
    return this.logo.isDisplayed();
  }

  // verify if the User name section is being displayed
  isUserLoggedIn(){
    // this.userLoggedIn.waitForExist();
    return this.userLoggedIn.isDisplayed();
  }

  // navigate to My Account page
  goToMyAccount() {
    super.customClick(this.myAccountMenuBtn);
  }

  // navigate to the Administrative Users page
  goToAdminUsers() {
    super.customClick(this.adminUsersMenuBtn);
  }

  // navigate to the Create New Employee form
  goToCreateNewEmployee() {
    super.customClick(this.createNewUserBtn);
  }

  // click Logout button
  logout() {
    super.customClick(this.logoutBtn);
  }

  // verify if the provided user data matches the information on the list
  getUserRow(userData) {
    let userInfo = userData.split(",");
    let rows = this.tableRowsArr; 

    function getCelValue (rowIndex, columnIndex){
      return rowIndex.$$('td')[columnIndex].getText();                                // return the text of the cell
    }

    for (let i = 1, n = rows.length; i < n; i++){                                     // traverse the table rows looking for the provided user data
      if (getCelValue(rows[i], 0) == userInfo[0]   &&                                 // First Name
          (getCelValue(rows[i], 1) == userInfo[1]) &&                                 // Last Name
          (getCelValue(rows[i], 2) == userInfo[2]) &&                                 // Identification
          (getCelValue(rows[i], 3) == userInfo[3]) &&                                 // Leader Name
          (getCelValue(rows[i], 4).split("/").join("-")) == userInfo[4]) {         // Entry Date, also replaced the "/" for "-"" as the Date provided in the requirements is in different format.
          // console.log('New user was successfully located in the row number: ' + i);
          return (i);                                                                 // if the user is found the method return the row number
      } 
    }
    return 0;                                                                         // returns 0 if the user is not found
  }
  
  isUserInList(row, userData){  
    return (row > 0) ? true : false;
  }
  
  deleteUser(row, userData){
    super.customClick(this.tableRowsArr[row].$$('td')[8]);
    browser.acceptAlert();
  }

}
export default new EmployeeList();