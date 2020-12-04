let WebControlBase = require("./web.controls.basics");

class WebInput extends WebControlBase{

constructor(element){
   super(element);
}

async sendKeys(value){
    await this.element.sendKeys(value);
}

async getAttribute(value){
    return await this.element.getAttribute(value);
}

}
module.exports = WebInput;
