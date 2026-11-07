export default class BasePage
{
    constructor(page)
    {
        this.page = page;
    }

    async click(locator)
    {
        await locator.click();
    }

    async doubleClick(locator)
    {
        await locator.dblClick();
    }

    async rightClick(locator)
    {
        await locator.click({button : 'right'});
    }

    async clear(locator)
    {
        await locator.clear();
    }

    async title()
    {
        await this.page.title();
    }

    async url()
    {
        await this.page.url();
    }

    async fill(locator, value)
    {
        await locator.fill(value);
    }

    async textContent(locator)
    {
        await locator.textContent();
    }
}