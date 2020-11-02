import Page from '../page';

class Login extends Page  {
  
  //define elements
  get logo()                { return $('#logo_text img'); }
  get email()               { return $('#user_email'); }
  get password()            { return $('#user_password'); }
  get signInSubmitBtn()     { return $('.submit'); }
  get loginIdentifier()     { return $('#content').$('h2*=Sign in'); }

  get signInBtn()           { return $('#content').$('a*=Sign in'); }
  get forgotPassSubmitBtn() { return $('.submit'); }
  get errorMessage()        { return $('#error_explanation > ul > li'); }


  // define or overwrite page methods

  // LOGIN PAGE
  // open providede url
  openUrl (url) {
    super.open(url);
    this.logo.waitForExist();
  }
  
  // insert provided Email into the email input from the Login page
  insertCustomEmail (text) {
    super.insertText(this.email,text);
  }

  // insert provided Password into the password input from the Login page
  insertPassword (text) {
    super.insertText(this.password,text);
  }

  // submit Login form
  submitSignIn() {
    super.customClick(this.signInSubmitBtn);
  }

  // verify if the user is in Login page by a unique identifier
  isLoginPage(){
    this.loginIdentifier.waitForExist();
    return this.loginIdentifier.isDisplayed();
  }

  // FORGOT PASSWORD PAGE
  // navigate to Sign In page from Forgot Password page
  goToSignIn() {
    super.customClick(this.signInBtn);
  }

  // sobmit Forgot Password form
  submitForgotPassword() {
    super.customClick(this.forgotPassSubmitBtn);
  }

  // retrive the error message in the Forgot Password page
  getErrorMessage(){
    // this.errorMessage.waitForDisplayed();
    return this.errorMessage.getText();
  }

}
export default new Login();