exports.config = {
    //directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['./features/*.feature'],
    cucumberOpts: {
        tags: false,
        // require step definitions
        require: [
            './features/stepDefinitions/*.js', // accepts a glob
        ]
    }
};