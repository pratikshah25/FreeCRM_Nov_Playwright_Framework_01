# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactPageTest.spec.js >> @e2e @Regression verify user is on Contact page
- Location: tests\ContactPageTest.spec.js:7:1

# Error details

```
TypeError: this.getByRole is not a function
```

# Page snapshot

```yaml
- status "Loading…" [ref=e4]
```

# Test source

```ts
  1  | import { th } from "@faker-js/faker";
  2  | import BasePage from "./BasePage.js";
  3  | 
  4  | export default class ContactPage extends BasePage
  5  | {
  6  |     constructor(page)
  7  |     {
  8  |         super(page);
  9  | 
> 10 |         this.contactLink = this.getByRole('link', {name : 'Contacts'});
     |                                 ^ TypeError: this.getByRole is not a function
  11 | 
  12 |         this.createButton = this.getByRole('button', {name : 'Create'});
  13 | 
  14 |         this.firstname = this.getByRole('textbox', {name : 'First Name'});
  15 | 
  16 |         this.lastname = this.getByRole('textbox', {name : 'Last Name'});
  17 | 
  18 |         this.email = this.getByRole('textbox', {name : 'Email'});
  19 | 
  20 |         this.saveButton = this.getByRole('button', {name : 'Save'});
  21 |     }
  22 | 
  23 |     async clickOnContactLink()
  24 |     {
  25 |         await this.click(this.contactLink);
  26 |     }
  27 | 
  28 |     async clickOnCreateButton()
  29 |     {
  30 |         await this.click(this.createButton);
  31 |     }
  32 | 
  33 |     async enterFirstname(fname)
  34 |     {
  35 |         await this.fill(this.firstname, fname);
  36 |     }
  37 | 
  38 |     async enterLastname(lname)
  39 |     {
  40 |         await this.fill(this.lastname, lname);
  41 |     }
  42 | 
  43 |     async enterEmail(email)
  44 |     {
  45 |         await this.fill(this.email, email);
  46 |     }
  47 | 
  48 |     async clickOnSaveButton()
  49 |     {
  50 |         await this.click(this.saveButton);
  51 |     }
  52 | }
```