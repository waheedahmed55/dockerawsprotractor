/**
 * Created by Waheed on 01/09/2020.
 */

var EC = protractor.ExpectedConditions;
var fs = require('fs');
var path = require('path');
var separator = path.sep;

var Sync = function () {

    this.isElementVisible = async function (ele, timeout) {
        var isPresent;
        try {
            isPresent = await browser.wait(EC.visibilityOf(ele), timeout);
        } catch (err) {
            isPresent = false;
        }
        return isPresent;
    }

    this.isElementPresent = function (ele, timeout) {
        browser.wait(EC.presenceOf(ele), timeout).catch(function (err) {
            throw new Error("Error occured while waiting for element with locator:" + ele.locator() + " to present, Exception message:" + err + " stackTrace: " + err.stack);
        });
        return true;
    }

    this.isElementStale = function (ele, timeout) {
        browser.waitForAngular();
        browser.wait(EC.stalenessOf(ele), timeout).catch(function (err) {
            throw new Error("Error occured while waiting for element with locator:" + ele.locator() + " not to be present, Exception message:" + err + " stackTrace: " + err.stack);
        });
        return true;
    }

    this.isElementClickable = async function (ele, timeout) {
        return await browser.wait(EC.elementToBeClickable(ele), timeout)
    }


    this.isElementInVisible = function (ele, timeout) {
        browser.wait(EC.invisibilityOf(ele), timeout).catch(function (err) {
            throw new Error("Error occured while waiting for element with locator:" + ele.locator() + " to disappear, Exception message:" + err + " stackTrace: " + err.stack);
        });
        return true;
    }

    this.isElementPresentForNonAngular = function (ele, timeout) {
        browser.driver.wait(function () {
            return browser.driver.findElement(ele).isDisplayed().then(function () { return true; }, function (err) { return false; });
        }, timeout).catch(function (err) {
            throw new Error("Error occured while waiting for element with locator:" + ele + " , Exception message:" + err + " stackTrace: " + err.stack);
        });
        return browser.driver.findElement(ele).isDisplayed();
    }

    this.switchToNewWindow = function () {
        browser.driver.getAllWindowHandles().then(function (windows) {
            browser.driver.switchTo().window(windows[windows.length - 1]);
        })
    }

    this.switchToNewAngualarWindow = function () {
        browser.waitForAngular();
        browser.getAllWindowHandles().then(function (windows) {
            browser.switchTo().window(windows[windows.length - 1]);
        });
        browser.waitForAngular();
    }

    this.switchToOldWindow = function () {
        browser.driver.getAllWindowHandles().then(function (windows) {
            browser.driver.switchTo().window(windows[0]);
        })
    }

    this.makeBrowserFullScreen = function () {
        browser.actions().sendKeys(protractor.Key.F11).perform();
    }

    this.printConsoleErrors = function () {
        browser.manage().logs().get('browser').then(function (browserLogs) {
            console.log('***************console error!********************' + browserLogs.length);
            browserLogs.forEach(function (log) {
                if (log.level.value > 900) { // it's an error log
                    console.log('Browser console error!');
                    console.log(log.message);
                }
            });
        });
    }

    this.captureScreenshot = function (fileName) {
        var absolutePath = path.resolve(__dirname, ".." + separator + ".." + separator + "snapshots" + separator + fileName + ".png");
        browser.takeScreenshot().then(function (png) {
            var stream = fs.createWriteStream(absolutePath);
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    }

    this.getRandomNumber = function () {
        return Math.random().toString().replace(".", "");
    }

    this.sortDecimalTypeArray = function (a, b) {
        var result;
        a = a.split('.');
        b = b.split('.');
        while (a.length) {
            if (result = a.shift() - (b.shift() || 0)) {
                return result;
            }
        }
        return -b.length;
    }

    this.sortDateTyeArray = function (a, b) {
        var arr1 = a.split(".");
        var arr2 = b.split(".");

        var time1 = new Date(arr1[2], arr1[1] - 1, arr1[0]); // year, month, day
        var time2 = new Date(arr2[2], arr2[1] - 1, arr2[0]);

        if (time1 > time2) return 1;
        if (time1 < time2) return -1;
        return 0;
    }

    this.getCurrentDateText = function () {
        var dt = new Date();
        return (dt.getMonth() + 1) + "_" + dt.getDate() + "_" + dt.getFullYear() + "_" + dt.getHours() + "h" + dt.getMinutes() + "m" + dt.getSeconds() + "s";
    };

    //Returns date in format dd.mm.yyyy - 01.08.2016
    this.getCurrentDate = function () {
        var dt = new Date();
        return dt.getDate() + "." + dt.getMonth() + "." + dt.getFullYear();
    }

    this.getDateWithCorrectFormat = function (dateObj) {
        var day = dateObj.getDate();
        var month = dateObj.getMonth() + 1;
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        return day + "." + month + "." + dateObj.getFullYear();
        //return dateObj.getDate() + "." + dateObj.getMonth()+1 + "." + dateObj.getFullYear();
    }

    this.dates = {
        convert: function (d) {
            return (
                d.constructor === Date ? d :
                    d.constructor === Array ? new Date(d[0], d[1], d[2]) :
                        d.constructor === Number ? new Date(d) :
                            d.constructor === String ? new Date(d) :
                                typeof d === "object" ? new Date(d.year, d.month, d.date) :
                                    NaN
            );
        },
        compare: function (a, b) {
            return (
                isFinite(a = this.convert(a).valueOf()) &&
                    isFinite(b = this.convert(b).valueOf()) ?
                    (a > b) - (a < b) :
                    NaN
            );
        },
        inRange: function (d, start, end) {
            return (
                isFinite(d = this.convert(d).valueOf()) &&
                    isFinite(start = this.convert(start).valueOf()) &&
                    isFinite(end = this.convert(end).valueOf()) ?
                    start <= d && d <= end :
                    NaN
            );
        }
    }

    this.isAlertPresent = function (timeout) {
        browser.waitForAngular();
        browser.wait(EC.alertIsPresent(), timeout).catch(function (err) {
            throw new Error("Error occured while waiting for alert to appear, Exception message:" + err + " stackTrace: " + err.stack);
        });
        return true;
    }

    this.mouseMoveToElementAndSelect = async function (targetElement, timeout) {
        //await browser.wait(EC.visibilityOf(targetElement), timeout);
        //await browser.wait(EC.elementToBeClickable(targetElement), timeout);
        await browser.actions().mouseMove(targetElement).click().perform();
        browser.pause(5000);
    }

}

module.exports = Sync;
