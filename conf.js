exports.config = {
    //framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
      './specs/suite.login/successfulLoginSpec.js',
      './specs/suite.topStories/playVideoSpec.js'
    ],

    onPrepare: async() => {
      browser.waitForAngularEnabled(false);
      console.log('My tests are running...');
      browser.driver.manage().window().maximize();
  }

  }