var LoginPageMethods = require("../../pages/pageMethods/LoginPage.js");
var HomePageMethods = require("../../pages/pageMethods/HomePage.js");
var LocationPageMethods = require("../../pages/pageMethods/LocationPage.js");
var data = require("../../resources/Data.json");
const { browser } = require("protractor");

describe('Location Test Cases : ', function () {
    var loginPage = new LoginPageMethods();
    var locationPage = new LocationPageMethods();

    beforeAll(async function () {
        await loginPage.launchTheSite(browser.baseUrl);
        expect(await loginPage.isLoginPageDisplayed()).toBe(true, 'Login page is not displayed');
        await loginPage.loginInToApp(data.username, data.password);
        expect(await loginPage.isLoginSuccessful()).toBe(true, 'Login page is not displayed');
    });

    it('Add New Location', async function () {
        await locationPage.AddNewLocation(data.locationName);
        expect(await locationPage.LocationValidation()).toBe(true, 'Location is not displayed');
        await locationPage.DeleteLocation();
        expect(await locationPage.DeleteLocationValidation()).toBe(true, 'Location is displayed');
    });

    xit('Edit New Location', async function () {
        await locationPage.AddNewLocation(data.locationName);
        expect(await locationPage.LocationValidation()).toBe(true, 'Location is not displayed');
        await locationPage.EditLocation(data.locationNameUpdated);
        await locationPage.DeleteLocationUpdated();
        expect(await locationPage.DeleteUpdatedLocationValidation()).toBe(true, 'Location is displayed');
    });

    xit('Delete New Location', async function () {
        await locationPage.AddNewLocation(data.locationName);
        expect(await locationPage.LocationValidation()).toBe(true, 'Location is not displayed');
        await locationPage.DeleteLocation();
        expect(await locationPage.DeleteLocationValidation()).toBe(true, 'Location is displayed');
    });

    xit('Bulk Upload Invite Location', async function () {
        await locationPage.AddNewLocation(data.locationName);
        expect(await locationPage.LocationValidation()).toBe(true, 'Location is not displayed');
        await locationPage.BulkInviteUpload();
        await locationPage.DeleteBulkInvitation();
        await locationPage.DeleteLocation();
        expect(await locationPage.DeleteLocationValidation()).toBe(true, 'Location is displayed');
    });

    xit('Create New Invite Location', async function () {
        await locationPage.AddNewLocation(data.locationName);
        expect(await locationPage.LocationValidation()).toBe(true, 'Location is not displayed');
        await locationPage.CreateLocationInvite(data.username, data.firstName, data.lastName);
        expect(await locationPage.CreatedInviteValidation()).toBe(true, 'Invitation is not displayed');
        await locationPage.DeleteCreatedInvite();
        expect(await locationPage.DeletedInviteValidation()).toBe(true, 'Invitation is displayed');
        await locationPage.DeleteLocation();
        expect(await locationPage.DeleteLocationValidation()).toBe(true, 'Location is displayed');
    });

    afterAll(async function () {
        await loginPage.logoutOfApp();
        expect(await loginPage.isLoginPageDisplayed()).toBe(true, 'Login page is not displayed');
    });

});