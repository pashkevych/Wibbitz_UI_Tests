const { testData } = require("../../../testData");
let LoginPage = require("../../pages/pg.login");
let HeaderPage = require("../../pages/pg.header");
let TopStoriesPage = require("../../pages/pg.topStories");
let MediaContainerPage = require("../../pages/pg.mediaContainer");
const { browser } = require("protractor");

describe('TopStories', () => {
    let loginPage;
    let headerPage = new HeaderPage();
    let topStoriesPage = new TopStoriesPage();
    let mediaContainerPage = new MediaContainerPage();

    beforeEach(async () => {
        loginPage = LoginPage.open();
        await loginPage.enterEmail(testData.userEmail);
        await loginPage.enterPassword(testData.userPassword);
        await loginPage.clickLoginButton();
    });

    it('Play Video', async () => {
      await headerPage.openTopStoriesTab();
      await topStoriesPage.playVideo();
      
      expect(await topStoriesPage.videoPageIsOpened()).toBe(true);
      await mediaContainerPage.clickOnCloseVideoButton();
    });


    afterEach(async () => {
        if (await headerPage.userAccountPanelPresent()) {
          await headerPage.clickOnUserAccountMenu();
          await headerPage.clickLogOutButton();
        }
      });

});

