let WebControlBase = require("./web.controls.basics");

class WebMediaContainer extends WebControlBase{

    constructor(element){
        super(element);
    }
    
    async click(){
        await this.element.click();
    }
    
}
    module.exports = WebMediaContainer;
