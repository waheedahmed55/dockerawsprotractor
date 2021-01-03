var loginLocators = require('../pageLocators/LoginPageLocators.js');
var pageLocators = require('../pageLocators/ScreeningPageLocators.js');
var Syn = require('../../utilities/Sync.js');
var waitTimeOuts = require('../../utilities/WaitTimeOuts.js');
const { element, browser } = require('protractor');
const HomePageLocators = require('../pageLocators/HomePageLocators.js');
const locationPageLocators = require('../pageLocators/LocationPageLocators.js');
var sync = new Syn();
var path = require('path');

var LocationPage = function () {

    this.AddNewLocation = async function(locationName){
        browser.waitForAngularEnabled(true);
        await locationPageLocators.location.click();
        await locationPageLocators.addLocations.click();
        await sync.captureScreenshot("Add Location");
        await locationPageLocators.locationName.sendKeys(locationName);
        await locationPageLocators.createLocation.click();
        await locationPageLocators.setupSaveLocation.click();
        await locationPageLocators.location.click();
    }

    this.DeleteLocation = async function(){
        // browser.waitForAngularEnabled(true);
        await locationPageLocators.location.click();
        browser.actions().mouseMove(locationPageLocators.selectLocation).perform();
        await locationPageLocators.deleteLocation.click();
        await locationPageLocators.deletePopup.click();
    }

    this.EditLocation = async function(updatedlocationname){
        browser.waitForAngularEnabled(true);
        // browser.actions().mouseMove(locationPageLocators.selectLocation).perform();
        // await locationPageLocators.location.click();
        await locationPageLocators.selectLocation.click();
        await locationPageLocators.locationNameFormEdit.clear();
        await locationPageLocators.locationNameFormEdit.sendKeys(updatedlocationname);
        await locationPageLocators.setupSaveLocation.click();
        await locationPageLocators.location.click();
    }

    this.DeleteLocationUpdated = async function(){
        browser.waitForAngularEnabled(true);
        // await locationPageLocators.location.click();
        browser.actions().mouseMove(locationPageLocators.selectLocationUpdated).perform();
        await locationPageLocators.deleteLocationUpdated.click();
        await locationPageLocators.deletePopup.click();
    }

    this.CreateLocationInvite = async function(email, firstname, lastname){
        browser.waitForAngularEnabled(true);
        await locationPageLocators.selectLocation.click();
        await locationPageLocators.locationInvites.click();
        await locationPageLocators.locationInviteGuest.click();
        await locationPageLocators.locationGuestEmail.sendKeys(email);
        await locationPageLocators.locationGuestFirstName.sendKeys(firstname);
        await locationPageLocators.locationGuestLastName.sendKeys(lastname);
        await locationPageLocators.locationSaveButton.click();
    }

    this.DeleteCreatedInvite = async function(){
        await locationPageLocators.locationInviteSelect.click();
        await locationPageLocators.locationInviteDelete.click();
        await locationPageLocators.locationDeletePopup.click();
    }

    this.BulkInviteUpload = async function(){
        var fileUpload = '../../resources/Invited Guests.csv'
        var pathToFile = path.resolve(__dirname,fileUpload);
        console.log(pathToFile);
        browser.waitForAngularEnabled(true);
        await locationPageLocators.location.click();
        await locationPageLocators.selectLocation.click();
        await locationPageLocators.locationInvites.click();
        await locationPageLocators.uploadCsv.click();
        await locationPageLocators.bulkInviteUpload.sendKeys(pathToFile);
        await locationPageLocators.uploadInvitationsButton.click();
        await browser.sleep(10000);
        await locationPageLocators.closeNotification.click();
    }

    this.InvitationCount = async function(){
        return await locationPageLocators.bulkDataValidate.count();
    }

    this.DeleteBulkInvitation = async function(){
        await locationPageLocators.location.click();
        await locationPageLocators.selectLocation.click();
        await locationPageLocators.locationInvites.click();
        locationPageLocators.bulkDataValidate.count().then(function(text){
            console.log(text);
            expect(text).not.toBe(0);
        });
        await locationPageLocators.uploadInviteSelectAll.click();
        await locationPageLocators.locationInviteDelete.click();
        await locationPageLocators.locationDeletePopup.click();
        locationPageLocators.bulkDataValidate.count().then(function(text){
            console.log(text);
            expect(text).toBe(0);
        });
        await locationPageLocators.closeNotification.click();
        await locationPageLocators.location.click();
    }

    this.NavigateToLocationTab = async function(){
        await locationPageLocators.location.click();
    }

    this.LocationTabValidation = async function(){
        return await sync.isElementVisible(locationPageLocators.location, waitTimeOuts.shortWait);
    }

    this.LocationTabAddValidation = async function(){
        return await sync.isElementVisible(locationPageLocators.addLocations, waitTimeOuts.shortWait);
    }

    this.CreatedInviteValidation = async function(){
        return await sync.isElementPresent(locationPageLocators.locationValidateGuest, waitTimeOuts.shortWait);
    }

    this.isCreatedLocationMessageDisplayed = async function () {
        return await sync.isElementPresent(locationPageLocators.createdLocationMessage, waitTimeOuts.shortWait);
    }

    this.DeletedInviteValidation = async function(){
        return await sync.isElementInVisible(locationPageLocators.locationValidateGuest, waitTimeOuts.shortWait);
    }

    this.isLocationSavedMessageDisplayed = async function () {
        return await sync.isElementPresent(locationPageLocators.locationSavedMessage, waitTimeOuts.shortWait);
    }

    this.LocationValidation = async function() {
        return await sync.isElementPresent(locationPageLocators.selectLocation, waitTimeOuts.shortWait);
    }

    this.DeleteLocationValidation = async function() {
        return await sync.isElementInVisible(locationPageLocators.selectLocation, waitTimeOuts.shortWait);
    }

    this.DeleteLocationUpdatedValidation = async function() {
        return await sync.isElementInVisible(locationPageLocators.selectLocationUpdated, waitTimeOuts.shortWait);
    }

    this.DeleteUpdatedLocationValidation = async function() {
        return await sync.isElementInVisible(locationPageLocators.selectLocationUpdated, waitTimeOuts.shortWait);
    }

}
module.exports = LocationPage;