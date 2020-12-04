let WebInput = require("../web_controls/web.inputs");
let WebButtons = require("../web_controls/web.buttons");
const { testData } = require("../../testData");

const emailField = by.id('1-email');
const passwordField = by.css('[type = password]');
const loginButton = by.css('[name = submit]');

class LoginPage{

    constructor(){
    }

    static open(){
        browser.get(testData.loginPageUrl);
        return new LoginPage();
    }

    async enterEmail(userEmail){
        await this.getEmailElement().waitForElementToBeVisible(5000);
        await this.getEmailElement().sendKeys(userEmail);
    }

   async enterPassword(userPassword){
       await this.getPasswordElement().sendKeys(userPassword);
    }
      
    async clickLoginButton(){
        await this.getLoginButtonElement().waitForElementToBeVisible(5000);
        await this.getLoginButtonElement().click();
    }

    //getters for web controls getting
    getEmailElement(){
        return new WebInput(element(emailField));
    }

    getPasswordElement(){
        return new WebInput(element(passwordField));
    }

    getLoginButtonElement(){
        return new WebButtons(element(loginButton));
    }

}

module.exports = LoginPage;
