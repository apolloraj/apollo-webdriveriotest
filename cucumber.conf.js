exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    // set to "custom" instead of cucumber.
    framework: 'custom',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,   
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome',
        // 'browserName': 'internet explorer',
        // 'browserName': 'firefox',
        // "handlesAlerts":true,
        // "unexpectedAlertBehaviour": "accept"
      },
    // require feature files
    specs: [
      'src/features/cucumber.feature' // accepts a glob
    ],
   
    cucumberOpts: {
      // require step definitions
      require: [
        'env.js',
        'src/step-definitions/cucumber.steps.js' // accepts a glob
      ],
      timeout: 20000,
    }
  };