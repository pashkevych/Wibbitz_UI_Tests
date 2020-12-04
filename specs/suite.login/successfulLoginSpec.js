const { testData } = require("../../../testData");
let LoginPage = require("../../pages/pg.login");
let HeaderPage = require("../../pages/pg.header");

describe('Home', () => {
    let loginPage;
    let headerPage = new HeaderPage();

    beforeEach(async () => {
      loginPage = LoginPage.open();
    });

    it('Successful login', async () => {
      await loginPage.enterEmail(testData.userEmail);
      await loginPage.enterPassword(testData.userPassword);
      await loginPage.clickLoginButton();
      await headerPage.clickOnUserAccountMenu();
      
      expect(await headerPage.checkUserNameInUserMenu()).toEqual(testData.userEmail);
      await headerPage.clickOnUserAccountMenu();
    });

    afterEach(async () => {
      if (await headerPage.userAccountPanelPresent()) {
        await headerPage.clickOnUserAccountMenu();
        await headerPage.clickLogOutButton();
      }
    });

});

