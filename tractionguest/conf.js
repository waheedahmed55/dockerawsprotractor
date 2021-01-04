/**
 * Created by Waheed on 01/09/2020.
 */

/*global protractor*/
var path = require('path');
var separator = path.sep;
var dt = new Date();
var randomFolderName = (dt.getMonth() + 1) + "" + dt.getDate() + "" + dt.getFullYear() + "_" + dt.getHours() + "h" + dt.getMinutes() + "m" + dt.getSeconds() + "s";
var HtmlReporter = require('protractor-beautiful-reporter');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;




exports.config = {

    SELENIUM_PROMISE_MANAGER: false,

    seleniumAddress: 'http://172.19.0.2:4444/wd/hub',

    baseUrl: 'https://delta-kube-qe-demo.tractionguest.xyz/#/Login',

    // capabilities: {
    //     maxInstances: 1,
    //     // browserName: 'chrome',
    //     // chromeOptions: {
    //     //     useAutomationExtension: false,
    //     //     args: ['--disable-extensions', 'disable-infobars']
    //     // }
    // //     'browserName': 'firefox',
    // //     'marionette': true
    // },

    multiCapabilities: [
        {
            'browserName': 'chrome',
            'chromeOptions': {
                'args': ['--disable-extensions','disable-infobars']
            }
        },
        {
            'browserName': 'firefox',
            'moz:firefoxOptions': {
                'args': ['--safe-mode']
            }
        }
    ],

    suites: {
        smoke: ['e2e/specs/smoke-tests/TGSmokeTestSpec.js'],
        regression: ['e2e/specs/regression-tests/LoginTestsSpec.js',
        'e2e/specs/regression-tests/LocationTestsSpec.js'
        ],
    },

    specs: [
    'e2e/specs/regression-tests/LoginTestsSpec.js',
    //'e2e/specs/regression-tests/LocationTestsSpec.js'
    ],

    params: {
        email: "waheedahmed55@gmail.com",
        password: ""
    },

    framework: 'jasmine2',

    allScriptsTimeout: 720000,

    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 1440000
    },

    onPrepare: function () {
        browser.driver.getCapabilities().then(function (caps) {
            browser.browserName = caps.get('browserName');
        });
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: { displayStacktrace: true },
            summary: { displayDuration: false }
        }));
        browser.getCapabilities().then(function (value) {

            // //chrome
            // let browserVersion = value.get('version');
            // if (!browserVersion){
            //     //firefox
            //     browserVersion = value.get('browserVersion');
            // }
            // let platform = value.get('platform');
            // if (!platform){
            //     platform = value.get('platformName');
            // }

            //reportName = platform + '_' + value.get('browserName') + '_'+ browserVersion + '_'+ Math.floor(Math.random()*1E16);
            reportName = value.get('browserName');
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './TestReports/TractionGuest_ '+reportName+'',  
                preserveDirectory: false, 
                clientDefaults:{
                    columnSettings:{
                        displayTime:true,
                        displayBrowser:true,
                        displaySessionId:true,
                        displayOS:true,
                        inlineScreenshots:true
                    },
                showTotalDurationIn: "header",                  
                totalDurationFormat: "hms"            
            }     
        }).getJasmine2Reporter());
})}
};
