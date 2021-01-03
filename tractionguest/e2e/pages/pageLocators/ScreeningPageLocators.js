/**
 * Created by Waheed on 01/09/2020.
 */
var ScreeningPageLocators = {
    URL: "https://citapply-citdemande-dev.apps.cic.gc.ca/en/screening",
    URL2:"https://citapply-citdemande-dev.apps.cic.gc.ca/en/personal-info",
    ScreeningPageHeaderText: element(by.xpath("//*[text()='Pre-screening for Adult 5(1) Online Application Citizenship Grant']")),
    ScreeningQue1: element(by.xpath(".//*[text()='Do you have a valid email address?']")),
    ScreeningQue1Option: element(by.xpath(".//*[text()='Do you have a valid email address?']/following-sibling::div//*[text()='Yes']")),
    ScreeningQue2: element(by.xpath(".//*[text()='Are you a permanent resident?']")),
    ScreeningQue2Option: element(by.xpath(".//*[text()='Are you a permanent resident?']/following-sibling::div//*[text()='Yes']")),
    ScreeningQue3: element(by.xpath(".//*[text()='Will you be between 18 to 54 years of age when you submit your application?']")),
    ScreeningQue3Option: element(by.xpath(".//*[text()='Will you be between 18 to 54 years of age when you submit your application?']/following-sibling::div//*[text()='Yes']")),
    ScreeningQue4: element(by.xpath(".//*[text()='Are you applying for yourself?']")),
    ScreeningQue4Option: element(by.xpath(".//*[text()='Are you applying for yourself?']/following-sibling::div//*[text()='Yes, just for myself']")),
    ScreeningQue5: element(by.xpath(".//*[text()='Will you apply using a representative?']")),
    ScreeningQue5Option: element(by.xpath(".//*[text()='Will you apply using a representative?']/following-sibling::div//*[text()='Yes']")),
    ScreeningQue5OptionNo: element(by.xpath(".//*[text()='Will you apply using a representative?']/following-sibling::div//*[text()='No']")),
}

module.exports = ScreeningPageLocators;