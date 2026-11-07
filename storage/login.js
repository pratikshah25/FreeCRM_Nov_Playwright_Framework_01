import { chromium } from '@playwright/test';
import env from '../env/env.config.js';
import LoginPage from '../pages/LoginPage.js';

export default async function LoginStorageState() 
{
    const browser = await chromium.launch({headless : false});

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto(env.URL);

    const loginPage = new LoginPage(page);

    await loginPage.enterUsername(env.USERNAME);

    await loginPage.enterPassword(env.PASSWORD);

    await loginPage.clickOnLoginButton();

    await page.waitForTimeout(3000);

    await page.context().storageState({path : './storage/login.json'});

    await browser.close();
}