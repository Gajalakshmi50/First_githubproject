const BasePage=require('./BasePage');
class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.UsernameInput=page.locator('#user-name');
        this.PasswordInput=page.locator('#password');
        this.loginbutton=page.locator('#login-button');
    }
    async login(username,password){
        await this.fill(this.UsernameInput,username);
        await this.fill(this.PasswordInput,password);
        await this.click(this.loginbutton);
    }
#testSamemoduleDifferentUser
#conflict2
module.exports=LoginPage;
#conflictchange2
