let WebControlBase = require("./web.controls.basics");

class WebButtons extends WebControlBase{

    constructor(element){
        super(element);
    }
    
    async click(){
        await this.element.click();
    }
    
}
    module.exports = WebButtons;
