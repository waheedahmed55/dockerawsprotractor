const { element, by, browser } = require('protractor');

var LoginPageLocators = {
    LoginUsername: element(by.id("username")),
    LoginPassword: element(by.css("[type='password']")),
    LogInButton: element(by.css("[value='Log in']")),
    SignInButton: element(by.buttonText("Sign In")),
    loginPageHeader: element(by.xpath("//h6[text()='Sign In']")),
    settings: element(by.css("[lx-tooltip='Settings']")),
    logout: element(by.xpath("//span[text()='Logout']/parent::a[1]")),
}
module.exports = LoginPageLocators;
