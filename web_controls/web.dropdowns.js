let WebControlBase = require("./web.controls.basics");

class WebDropdowns extends WebControlBase{

    constructor(element){
        super(element);
    }
    
    async expand(){
        await this.element.click();
    }
    
}
    module.exports = WebDropdowns;