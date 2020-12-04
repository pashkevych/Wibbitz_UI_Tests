let WebDropdowns = require("../web_controls/web.dropdowns");
let WebText = require("../web_controls/web.text");
let WebTabs = require("../web_controls/web.tabs");
let WebButtons = require("../web_controls/web.buttons");
const { testData } = require("../../testData");

const userAccountDropdown = by.css('.dropdown-arrow-container');
const userAccountPanel = by.css('.user-account-panel-button');
const userName = by.css('.username');
const topStoriesTab = by.css('.tab-top-stories');
const logOutButton = by.css('.logout-button');

class HeaderPage{

    constructor(){
    }

    async clickOnUserAccountMenu(){
        await this.getUserAccountDropdownElement().waitForElementToBeVisible(15000);
        await this.getUserAccountDropdownElement().expand();
    }

    async checkUserNameInUserMenu(){
        await this.getUserNameElement().waitForElementToBeVisible(5000);
        return await this.getUserNameElement().getText();
    }

    async openTopStoriesTab(){
        await this.getTopStoriesTabElement().waitForElementToBeVisible(15000);
        return await this.getTopStoriesTabElement().open();
    }

    async clickLogOutButton(){
        await this.getLogOutButtonElement().waitForElementToBeVisible(5000);
        await this.getLogOutButtonElement().click();
    }

    async userAccountPanelPresent(){
        return await this.getUserAccountPanelButtonElement().isPresent();
    }

    //getters for web controls getting
    getUserAccountDropdownElement(){
        return new WebDropdowns(element(userAccountDropdown));
    }

    getUserNameElement(){
        return new WebText(element(userName));
    }

    getTopStoriesTabElement(){
        return new WebTabs(element(topStoriesTab));
    }

    getLogOutButtonElement(){
        return new WebButtons(element(logOutButton));
    }

    getUserAccountPanelButtonElement(){
        return new WebButtons(element(userAccountPanel));
    }


}

module.exports = HeaderPage;
