let WebCompactBox = require("../web_controls/web.compactBox");
let WebMediaContainer = require("../web_controls/web.mediaContainer");
const { testData } = require("../testData");

const firstVideoElement = by.css('.simple-compact-box:first-of-type');
const videoPage = by.css('.video-page');

class TopStoriesPage{

    constructor(){
    }

    static open(){
        browser.get(testData.topStoriesPageUrl);
        return new TopStoriesPage();
    }

    async playVideo(){
        await this.getfirstVideoElement().waitForElementToBeVisible(6000);
        await this.getfirstVideoElement().click();
    }

    async videoPageIsOpened(){
        return await this.getVideoPageElement().isPresent();
    }

    //getters for web controls getting
    getfirstVideoElement(){
        return new WebCompactBox(element(firstVideoElement));
    }

    getVideoPageElement(){
        return new WebMediaContainer(element(videoPage));
    }
}

module.exports = TopStoriesPage;
