import Page from '../page';

class AdminList extends Page {

//   //define elements
  get logoutBtn()         { return $('#user_information').$('a*=Logout'); }
  get createNewUserBtn()  { return $('#content').$('a*=Create a new Admin user'); }
  
  // define or overwrite page methods
  
  // navigate to the Create New Employee form
  goToCreateNewAdmin() {
    super.customClick(this.createNewUserBtn);
  }

  // click Logout button
  logout() {
    super.customClick(this.logoutBtn);
  }

}
export default new AdminList();