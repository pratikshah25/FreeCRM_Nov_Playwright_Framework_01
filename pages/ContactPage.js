import { th } from "@faker-js/faker";
import BasePage from "./BasePage.js";

export default class ContactPage extends BasePage
{
    constructor(page)
    {
        super(page);

        this.contactLink = this.getByRole('link', {name : 'Contacts'});

        this.createButton = this.getByRole('button', {name : 'Create'});

        this.firstname = this.getByRole('textbox', {name : 'First Name'});

        this.lastname = this.getByRole('textbox', {name : 'Last Name'});

        this.email = this.getByRole('textbox', {name : 'Email'});

        this.saveButton = this.getByRole('button', {name : 'Save'});
    }

    async clickOnContactLink()
    {
        await this.click(this.contactLink);
    }

    async clickOnCreateButton()
    {
        await this.click(this.createButton);
    }

    async enterFirstname(fname)
    {
        await this.fill(this.firstname, fname);
    }

    async enterLastname(lname)
    {
        await this.fill(this.lastname, lname);
    }

    async enterEmail(email)
    {
        await this.fill(this.email, email);
    }

    async clickOnSaveButton()
    {
        await this.click(this.saveButton);
    }
}