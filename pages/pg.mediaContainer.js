let WebButtons = require("../web_controls/web.buttons");
const { testData } = require("../../testData");

const videoPageCloseButton = by.css('[data-test-id=video-page-close-button]');


class MediaContainerPage{

    constructor(){
    }

    async clickOnCloseVideoButton(){
        await this.getvideoPageCloseButtonElement().waitForElementToBeVisible(5000);
        await this.getvideoPageCloseButtonElement().click();
    }

    //getters for web controls getting
    getvideoPageCloseButtonElement(){
        return new WebButtons(element(videoPageCloseButton));
    }
}

module.exports = MediaContainerPage;
