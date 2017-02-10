var jasmineReporters = require('jasmine-reporters');
jasmine.VERBOSE = true;
jasmine.getEnv().addReporter(
    new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './results',
        filePrefix: 'test-results'
    })
);
