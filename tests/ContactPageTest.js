import { test, expect } from '../fixtures/GlobalFixture.js';

test.beforeEach("Precondition", async ({page}) => {
    await page.goto("/");
});

test("@e2e @Regression verify user is on Contact page", async ({page, contactPage}) => {
    await contactPage.clickOnContactLink();

    await expect(page.url()).toContain("contacts");
});

test("@e2e @Regression @Sanity create new contact", async ({page, contactPage}) => {
    await contactPage.clickOnContactLink();

    await contactPage.clickOnCreateButton();

    await contactPage.enterFirstname("Krushnapriya");

    await contactPage.enterLastname("Musande");

    await contactPage.enterEmail("krushnapriya@gmail.com");

    await contactPage.clickOnSaveButton();
});