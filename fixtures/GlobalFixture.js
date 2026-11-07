import { test as base, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import ContactPage from '../pages/ContactPage.js';

const test = base.extend({
    loginPage : async({ page }, use) => {
        await use(new LoginPage(page));
    },

    contactPage : async ({ page }, use) => {
        await use(new ContactPage(page));
    }
});

module.exports = { test, expect };