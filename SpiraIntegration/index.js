const spiraServiceUrl = "/Services/v5_0/RestService.svc/";

var SpiraReporter = async (baseReporterDecorator, config, logger, helper, formatError) => {


    var log = logger.create("reporter.spira");
    log.warn("Open!");

    this.adapters = [function (msg) {
        process.stdout.write.bind(process.stdout)(msg + "rn");
    }];

    //we will submit all test runs at once
    var url = config.spiratestReporter.url + spiraServiceUrl + "projects/" + config.spiratestReporter.projectId
        + "/test-runs/record?username=" + config.spiratestReporter.username
        + "&api-key=" + config.spiratestReporter.token;

    var protocol = http.request;
    if (url.startsWith("https")) {
        protocol = https.request;
        //cut the https:// out of the url
        url = url.substring(8);
    }
    else if (url.startsWith("http")) {
        //cut out the http:// out of the url
        url = url.substring(7);
    }

    var path = url.substring(url.indexOf("/"));
    url = url.substring(0, url.length - path.length);

    var options = {
        host: url,
        path: path,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
        }
    }

    //open the POST request
    var request = protocol(options, (res) => {

    });

    request.on("error", e => {
        // console.log("Error " + e);
    })

    //actually send the data
    request.write(JSON.stringify({
        "TestRunFormatId": 1,
        "StartDate": "/Date(1533927013359-05.000)/",
        "RunnerName": "PyTest",
        "RunnerTestName": "test_add_1",
        "RunnerMessage": "Test Succeeded",
        "RunnerStackTrace": "",
        "TestCaseId": "20",
        "ExecutionStatusId": 2,
        "ReleaseId": 5,
        "TestSetId": 1
    }));
    request.end();
}

// SpiraReporter.prototype.onRunStart = browsers => {
//     SpiraReporter.write("Hello World");
// }



SpiraReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError']

// PUBLISH DI MODULE
module.exports = {
    'reporter:spira': ['type', SpiraReporter]
}