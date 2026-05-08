const base=require('@playwright/test');
const LoginPage=require('../Pages/LoginPage');
const TestHooks=require('../Hooks/hooks');

#test1
const test = base.test.extend({
    loginPage : async ({page}, use)=>{
        await TestHooks.beforeEach(page);
        const loginPage = new LoginPage(page);
        await use(loginPage);
        await TestHooks.afterEach(page);
    }   

})
module.exports={
    test,
    expect: base.expect
}
