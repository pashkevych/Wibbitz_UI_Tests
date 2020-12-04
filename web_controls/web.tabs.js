let WebControlBase = require("./web.controls.basics");

class WebTabs extends WebControlBase{

    constructor(element){
        super(element);
    }
    
    async open(){
        await this.element.click();
    }
    
}
    module.exports = WebTabs;
