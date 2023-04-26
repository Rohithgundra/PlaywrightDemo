import { Page, test } from "@playwright/test";

export class ElementHelper 
{
    readonly page:Page;
    constructor(page: Page) {
        this.page = page;
    }
    async navigateToSite(url: string)
    {
        await this.page.goto(url)
    }

    async readTextFromElement(locator:string)
    {
        return this.page.locator(locator).textContent({timeout:60000})
    }
    async writeTextToElement(locator:string,text:string)
    {
        this.page.locator(locator).fill(text);
    }
    async pressKeyonElement(locator:string,text:string)
    {
        this.page.locator(locator).press(text);
    }
    async getElement(locator:string)
    {
        return this.page.locator(locator);
    }
}
module.exports={ElementHelper}