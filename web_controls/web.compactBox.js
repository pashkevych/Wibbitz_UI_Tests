let WebControlBase = require("./web.controls.basics");

class WebCompactBox extends WebControlBase{

    constructor(element){
        super(element);
    }
    
    async click(){
        await this.element.click();
    }
    
}
    module.exports = WebCompactBox;