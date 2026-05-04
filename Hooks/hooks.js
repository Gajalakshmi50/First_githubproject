const EnvUtils = require('../Utils/envUtils');
class TestHooks{
    static async beforeEach(page){
        const baseUrl=EnvUtils.get('BASE_URL');
            await page.goto(baseUrl);
    }
    static async afterEach(page){
        console.log("test completed");
    }
}
module.exports=TestHooks;
