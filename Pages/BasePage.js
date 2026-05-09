const CommonUtils=require('../Utils/commonUtils');
class BasePage{
    constructor(page){
        this.page=page;
    }
    async navigate(url){
        await this.page.goto(url);
    }
    async click(locator){
        await CommonUtils.click(locator);
    }
    async fill(locator,value){
        await CommonUtils.fill(locator,value);
    }
}
module.exports=BasePage;
