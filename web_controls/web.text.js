let WebControlBase = require("./web.controls.basics");

class WebText extends WebControlBase{

    constructor(element){
        super(element);
    }

    async click(){
        await this.element.click();
    }
    
    async getText(){
        return await this.element.getText();
    }
    
    }
    module.exports = WebText;
