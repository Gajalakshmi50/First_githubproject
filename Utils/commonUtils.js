class CommonUtils{
    static async click(locator){
        await locator.click();
    }
    static async fill(locator,value){
        await locator.fill(value);
    }
    static async getText(locator){
        return await locator.textContent()
    }
}
module.exports=CommonUtils;