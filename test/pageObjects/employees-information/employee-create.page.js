import Page from '../page';

class EmployeeCreate extends Page {
  
  //define elements
  get firstName()           { return $('#employee_first_name'); }
  get lastName()            { return $('#employee_last_name'); }
  get email()               { return $('#employee_email'); }
  get identification()      { return $('#employee_identification'); }
  get leaderName()          { return $('#employee_leader_name'); }
  get yearDropdown()        { return $('#employee_start_working_on_1i'); }
  get monthDropdown()       { return $('#employee_start_working_on_2i'); }
  get dayDropdown()         { return $('#employee_start_working_on_3i'); }
  get createUserSubmitBtn() { return $('#new_employee input[type=submit]'); }
  get logoutBtn()           { return $('#user_information').$('a*=Logout'); }
  get successfullMessage()  { return $('#notice'); }

  // define or overwrite page methods

  // insert provided text into the First Name input from the create new employee user page
  insertFirstName (text) {
    super.insertText(this.firstName,text);
  }

  // insert provided text into the Last Name input from the create new employee user page
  insertLastName (text) {
    super.insertText(this.lastName,text);
  }

  // insert provided text into the Email input from the create new employee user page
  insertEmail (text) {
    super.insertText(this.email,text);
  }

  // insert provided text into the Identification input from the create new employee user page
  insertIdentification (text) {
    super.insertText(this.identification,text);
  }

  // insert provided text into the Leader Name input from the create new employee user page
  insertLeaderName (text) {
    super.insertText(this.leaderName,text);
  }

  // select provided date into the Entry Date dropdowns from the create new employee user page
  insertEntryDate (date) {
    // as the requirements are asking for a year that currently doesn't exist, I'm adding it manually to the html here
    browser.execute( (element) => { 
      let opt = document.createElement('option');
      opt.appendChild( document.createTextNode('2014') );
      opt.value = '2014'; 
      element.insertBefore(opt, element.firstChild);
    }, this.yearDropdown);
    
    this.yearDropdown.selectByAttribute('value', +date.split("-")[2]);
    this.monthDropdown.selectByAttribute('value', +date.split("-")[0]);
    this.dayDropdown.selectByAttribute('value', +date.split("-")[1]);
  }

  // submit create new employee user form
  submitCreateUser() {
    super.customClick(this.createUserSubmitBtn);
  }

  // retrive message text
  getSuccessfullMessage(){
    return this.successfullMessage.getText();
  }

  // click Logout button
  logout() {
    super.customClick(this.logoutBtn);
  }

}
export default new EmployeeCreate();
