const { element, by, browser } = require('protractor');

var HomePageLocators = {
    HomePageView: element(by.id("guestbook")),
}
module.exports = HomePageLocators;