/**
 * Created by Waheed on 01/09/2020.
 */

var specDes,resultStatus,errorMessage,stackTrace,tcName;
const editJsonFile = require("edit-json-file");

var JsonReport = function(){
    this.writeToJson = function (specName) {
        tcName = specName;
        return jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (specDes != result.description) {
                    specDes = result.description;
                    if (result.failedExpectations.length > 0) {
                        resultStatus = "FAILED";
                        errorMessage = result.failedExpectations[0].message;
                        stackTrace = result.failedExpectations[0].stack;
                    }
                    //else if (result.passedExpectations.length > 1) {
                    else {
                        resultStatus = "PASSED";
                        errorMessage = "N/A";
                        stackTrace = "N/A";
                    }
                    var file = editJsonFile(jsonReportFilePath,{
                        autosave: true
                    });
                    file.set("ExecutionResults."+tcName+"."+specDes.replace("."," ")+".result", resultStatus);
                    file.set("ExecutionResults."+tcName+"."+specDes.replace("."," ")+".message", errorMessage);
                    file.set("ExecutionResults."+tcName+"."+specDes.replace("."," ")+".stackTrace", stackTrace);
                    file.save();
                }
            },
            suiteDone:function(){
                tcName = "";
            }
        });
    }
}

module.exports = JsonReport;