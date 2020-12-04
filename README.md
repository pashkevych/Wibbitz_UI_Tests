# Wibbitz_UI_Tests
0. Download and install Node.js v12+ (x64) from https://nodejs.org/en/;
1. Install JDK 1.8 https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
2. Clone framework repository;
3. Navigate to directory where framework was cloned (you should see package.json file there);
4. Open command line (terminal) and install project dependencies using command $ npm install;
5. After all installed, run command $ webdriver-manager update to update browser drivers;
6. Start selenium-server-standalone, run command $ webdriver-manager start, current cmd/terminal window should be always opened in background, as it is separate process, which should be always started during tests execution;
7. Open new cmd/terminal window and use $ protractor conf.js to run all tests on local machine.