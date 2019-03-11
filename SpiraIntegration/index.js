var SpiraReporter = (baseReporterDecorator, config, logger, helper, formatError) => {
    var log = logger.create("reporter.hello");
}

SpiraReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError']

// PUBLISH DI MODULE
module.exports = {
    'reporter:spira': ['type', SpiraReporter]
}