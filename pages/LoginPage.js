import BasePage from "./BasePage.js";

export default class LoginPage extends BasePage
{
    constructor(page)
    {
        super(page);

        this.username = page.locator("//input[@id='email']");

        this.password = page.locator("//input[@id='password']");

        this.loginButton = page.locator("//button[text()='Login']");
    }

    async enterUsername(uname)
    {
        await this.fill(this.username, uname);
    }

    async enterPassword(pass)
    {
        await this.fill(this.password, pass);
    }

    async clickOnLoginButton()
    {
        await this.click(this.loginButton);
    }
}