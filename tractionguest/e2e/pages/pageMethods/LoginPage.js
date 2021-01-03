var loginLocators = require('../pageLocators/LoginPageLocators.js');
var pageLocators = require('../pageLocators/ScreeningPageLocators.js');
var Syn = require('../../utilities/Sync.js');
var waitTimeOuts = require('../../utilities/WaitTimeOuts.js');
const { element, browser } = require('protractor');
const HomePageLocators = require('../pageLocators/HomePageLocators.js');
var sync = new Syn();

var LoginPage = function () {

    this.launchTheSite = async function (url) {
        browser.waitForAngularEnabled(false);
        await browser.get(url, waitTimeOuts.longWait);
        await browser.manage().window().maximize();
    }

    this.isLoginPageDisplayed = async function () {
        return await sync.isElementVisible(loginLocators.loginPageHeader, waitTimeOuts.shortWait);
    }

    this.loginInToApp = async function(username, password) {
        await loginLocators.LoginUsername.sendKeys(username);
        await loginLocators.SignInButton.click();
        await sync.isElementVisible(loginLocators.LoginPassword, waitTimeOuts.shortWait);
        await loginLocators.LoginPassword.sendKeys(password);
        await loginLocators.LogInButton.click();
    }

    this.isLoginSuccessful = async function(){
        return await sync.isElementVisible(HomePageLocators.HomePageView, waitTimeOuts.shortWait);
    }

    this.logoutOfApp = async function() {
        await sync.isElementVisible(loginLocators.settings, waitTimeOuts.shortWait);
        await loginLocators.settings.click();
        await sync.isElementVisible(loginLocators.logout, waitTimeOuts.shortWait);
        await loginLocators.logout.click();
    }

}
module.exports = LoginPage;