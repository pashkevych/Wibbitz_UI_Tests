let WebControlBase = require("./web.controls.basics");

class WebLinks extends WebControlBase{

    constructor(element){
        super(element);
    }
    
    async click(){
        await this.element.click();
    }

    
}
    module.exports = WebLinks;
