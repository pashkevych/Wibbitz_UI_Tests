class WebControlBase{

    constructor(element){
        this.element = element;
    }

    async waitForElementToBeVisible(timeOut){
        await browser.wait(ExpectedConditions.presenceOf(this.element), timeOut, "element was not found");
        console.log(await browser.wait(ExpectedConditions.visibilityOf(this.element), timeOut, "element was not found"));
    }

    async isPresent(){
       return await this.element.isPresent();
    }

    async isVisible(){
        return await this.element.isVisible();
    }

    async getAttribute(value){
        return await this.element.getAttribute(value);
    }
    
}
    module.exports = WebControlBase;
