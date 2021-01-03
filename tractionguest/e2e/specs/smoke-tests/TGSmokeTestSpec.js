var LoginPageMethods = require("../../pages/pageMethods/LoginPage.js");
var HomePageMethods = require("../../pages/pageMethods/HomePage.js")
var LocationPageMethods = require("../../pages/pageMethods/LocationPage.js");
var data = require("../../resources/Data.json");
const { browser } = require("protractor");

describe('Smoke Test Cases : ', function () {
    var loginPage = new LoginPageMethods();
    var locationPage = new LocationPageMethods();

    beforeAll(async function () {
        await loginPage.launchTheSite(browser.baseUrl);
    });
    
    it('Verify that Traction Guest Login Page is displayed', async function () {
        expect(await loginPage.isLoginPageDisplayed()).toBe(true, 'Login page is not displayed');
    });

    it('Verify Login is successful', async function () {
        await loginPage.loginInToApp(data.username, data.password);
        expect(await loginPage.isLoginSuccessful()).toBe(true, 'Login page is not displayed');

    });

    it('Verify Logout is successful', async function () {
        await loginPage.logoutOfApp();
        expect(await loginPage.isLoginPageDisplayed()).toBe(true, 'Login page is not displayed');
    });

    afterAll(async function () {
        await browser.driver.manage().deleteAllCookies();
    });
});