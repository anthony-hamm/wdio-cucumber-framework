import Page from '../page';

class AdminCreate extends Page  {

//   //define elements
  get logoutBtn()               { return $('#user_information').$('a*=Logout'); }
  
  // define or overwrite page methods
  // click Logout button
  logout() {
    super.customClick(this.logoutBtn);
  }

}
export default new AdminCreate();