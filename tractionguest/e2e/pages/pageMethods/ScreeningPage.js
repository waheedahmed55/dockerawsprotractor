/**
 * Created by Waheed on 01/09/2020.
 */

var pageLocators = require('../pageLocators/ScreeningPageLocators.js');
var Syn = require('../../utilities/Sync.js');
var waitTimeOuts = require('../../utilities/WaitTimeOuts.js');
const { element, browser } = require('protractor');
var sync = new Syn();

var ScreeningPage = function () {

    this.launchTheSite = async function (url) {
        await browser.get(url, waitTimeOuts.longWait);
        await browser.manage().window().maximize();
    }

    this.isScreeningPageDisplayed = async function () {
        return await sync.isElementVisible(pageLocators.ScreeningPageHeaderText, waitTimeOuts.shortWait);
    }

    this.doYouHaveAValidEmailAddressQuestionIsDisplayed = async function () {
        return await sync.isElementVisible(pageLocators.ScreeningQue1, waitTimeOuts.shortWait)
    }

    this.selectYesForDoYouHaveAValidEmailAddressQuestion = async function () {
        await sync.isElementVisible(pageLocators.ScreeningQue1Option, waitTimeOuts.shortWait);
        await sync.isElementClickable(pageLocators.ScreeningQue1Option, waitTimeOuts.shortWait);
        await pageLocators.ScreeningQue1Option.click();
    }

    this.areYouAPermanentResidentQuestionIsDisplayed = async function () {
        return await sync.isElementVisible(pageLocators.ScreeningQue2, waitTimeOuts.shortWait)
    }

    this.selectYesForYouAPermanentResidentQuestion = async function () {
        await sync.isElementVisible(pageLocators.ScreeningQue2Option, waitTimeOuts.shortWait);
        await sync.isElementClickable(pageLocators.ScreeningQue2Option, waitTimeOuts.shortWait);
        await pageLocators.ScreeningQue2Option.click();
    }

    this.willYouBeBetween18To54YearsAgeQuestionIsDisplayed = async function () {
        return await sync.isElementVisible(pageLocators.ScreeningQue3, waitTimeOuts.shortWait)
    }

    this.selectYesForWillYouBeBetween18To54YearsAgeQuestion = async function () {
        await sync.isElementVisible(pageLocators.ScreeningQue3Option, waitTimeOuts.shortWait);
        await sync.isElementClickable(pageLocators.ScreeningQue3Option, waitTimeOuts.shortWait);
        await pageLocators.ScreeningQue3Option.click();
    }

    this.areYouApplyingForYourselfQuestionIsDisplayed = async function () {
        return await sync.isElementVisible(pageLocators.ScreeningQue4, waitTimeOuts.shortWait)
    }

    this.selectYesForareYouApplyingForYourselfQuestion = async function () {
        await sync.isElementVisible(pageLocators.ScreeningQue4Option, waitTimeOuts.shortWait);
        await sync.isElementClickable(pageLocators.ScreeningQue4Option, waitTimeOuts.shortWait);
        await pageLocators.ScreeningQue4Option.click();
    }

    this.willYouApplyUsingARepresentativeQuestionIsDisplayed = async function () {
        return await sync.isElementVisible(pageLocators.ScreeningQue5, waitTimeOuts.shortWait)
    }

    this.selectYesForwillYouApplyUsingARepresentativeQuestion = async function () {
        await sync.isElementVisible(pageLocators.ScreeningQue5Option, waitTimeOuts.shortWait);
        await sync.isElementClickable(pageLocators.ScreeningQue5Option, waitTimeOuts.shortWait);
        await pageLocators.ScreeningQue5Option.click();
    }

    this.selectNoForwillYouApplyUsingARepresentativeQuestion = async function () {
        await sync.isElementVisible(pageLocators.ScreeningQue5OptionNo, waitTimeOuts.shortWait);
        await sync.isElementClickable(pageLocators.ScreeningQue5OptionNo, waitTimeOuts.shortWait);
        await pageLocators.ScreeningQue5OptionNo.click();
    }

    this.isScreeningQuestionByTextDisplayd = async function (qText) {
        var questionLocator = element(by.xpath("//*[contains(text(),'" + qText + "')]"));
        return await sync.isElementVisible(questionLocator, waitTimeOuts.shortWait)
    }

    this.isButtonByTextDisplayd = async function (bText) {
        var buttonLocator = element(by.xpath("//*[normalize-space()='" + bText + "']"));
        return await sync.isElementVisible(buttonLocator, waitTimeOuts.shortWait)
    }

    this.clickButtonByTextDisplayd = async function (bText) {
        var buttonLocator = element(by.xpath("//*[normalize-space()='" + bText + "']"));
        await sync.isElementVisible(buttonLocator, waitTimeOuts.shortWait);
        await sync.isElementClickable(buttonLocator, waitTimeOuts.shortWait);
        await buttonLocator.click();
    }

    this.isTextDisplayd = async function (text) {
        var buttonLocator = element(by.xpath("//*[contains(text(),'" + text + "')]"));
        return await sync.isElementVisible(buttonLocator, waitTimeOuts.shortWait)
    }

    this.selectOptionByQTextAndOptionText = async function (qText, oText) {
        var locator = element(by.xpath("//*[contains(text(),'" + qText + "')]/following-sibling::*//*[text()='" + oText + "']"));
        await sync.isElementVisible(locator, waitTimeOuts.shortWait);
        await sync.isElementClickable(locator, waitTimeOuts.shortWait);
        await locator.click();
    }

    this.isURLContainsScreening = async function () {
        var currentURL = await browser.getCurrentUrl();
        return currentURL.indexOf('screening') >= -1 ? true : false;
    }

}
module.exports = ScreeningPage;