# Wibbitz_UI_Tests
This framework is designed to provide an easy-to-use way of interacting with Web UI.
Framework based on Protractor v7.0.0 and Jasmine. Protractor is a Node.js program built on top of Selenium WebDriver.

0. Download and install Node.js v12+ (x64) from https://nodejs.org/en/;
1. Install JDK 1.8 https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
2. Clone framework repository;
3. Use npm to install Protractor globally with: npm install -g protractor
4. After all installed, run command $ webdriver-manager update to update browser drivers;
5. Start selenium-server-standalone, run command $ webdriver-manager start, current cmd/terminal window should be always opened in background, as it is separate process, which should be always started during tests execution;
6. Open new cmd/terminal window and use $ protractor conf.js to run all tests on local machine.