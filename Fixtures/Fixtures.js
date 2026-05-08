const base=require('@playwright/test');
const LoginPage=require('../Pages/LoginPage');
const TestHooks=require('../Hooks/hooks');

#testtwo
const test = base.test.extend({
    loginPage : async ({page}, use)=>{
        await TestHooks.beforeEach(page);
        const loginPage = new LoginPage(page);
        await use(loginPage);
        await TestHooks.afterEach(page);
    }   
#test44
})
module.exports={
    test,
    expect: base.expect
}
