const { element, by, browser } = require('protractor');
var data = require("../../resources/Data.json");

var LocationPageLocators = {
    location: element(by.id("menuButton2")),
    addLocations: element(by.css("[lx-tooltip='Add Location']")),
    locationName: element(by.css("[label='Location Name'] input")),
    createLocation: element(by.buttonText("Create")),
    createdLocationMessage: element(by.xpath("//span[contains(text(), 'Created Location')]")),
    setupSaveLocation: element(by.buttonText("Save Setup Information")),
    locationSavedMessage: element(by.xpath("//span[contains(text(), 'Location saved successfully')]")),
    selectLocation: element(by.xpath("//li[starts-with(@ng-repeat,'location in')][1]//following::div[text()='"+data.locationName+"']")),
    deleteLocation: element(by.xpath("//li[starts-with(@ng-repeat,'location in')][1]//following::div[text()='"+data.locationName+"']/following::button[@lx-tooltip='Delete Location'][1]")),
    selectLocationUpdated: element(by.xpath("//li[starts-with(@ng-repeat,'location in')][1]//following::div[text()='"+data.locationNameUpdated+"']")),
    deleteLocationUpdated: element(by.xpath("//li[starts-with(@ng-repeat,'location in')][1]//following::div[text()='"+data.locationNameUpdated+"']/following::button[@lx-tooltip='Delete Location'][1]")),
    deletePopup: element(by.buttonText("Delete")),
    locationNameFormEdit: element(by.css("[label='Name'] input")),
    
    locationInvites: element(by.xpath("//span[text()='Invites']")),
    locationInviteGuest: element(by.css("[lx-tooltip='Invite Guest']")),
    locationGuestEmail: element(by.css("[type='email']")),
    locationGuestFirstName: element(by.css("[lx-label='First name'] input")),
    locationGuestLastName: element(by.css("[lx-label='Last name'] input")),
    locationSaveButton: element(by.xpath("//button[contains(text(),'Save And New')]/following::button[1]")),
    locationCancelButton: element(by.xpath("//button[contains(text(),'Cancel')]")),
    locationValidateGuest: element(by.xpath("//div[text()='"+data.username+"']")),
    locationInviteSelect: element(by.xpath("//td[@ng-attr-id='rowSelect']")),
    locationInviteDelete: element(by.css("[lx-tooltip='Delete']")),
    locationDeletePopup: element(by.xpath("//button[text()='Cancel']/following::button[1]")),

    uploadCsv: element(by.css("[lx-tooltip='Upload CSV']")),
    bulkInviteUpload: element(by.css("input[type='file']")),
    uploadInvitationsButton: element(by.xpath("//submit-button[@text='Upload Invitations']/button[1]")),
    uploadInviteSelectAll: element(by.css("[ng-if='lxDataTable.selectable']")),
    bulkDataValidate: element.all(by.repeater("tr in lxDataTable.tbody")),
    closeNotification: element(by.css("[ng-click='$ctrl.delete(notification)']")),
}
module.exports = LocationPageLocators;