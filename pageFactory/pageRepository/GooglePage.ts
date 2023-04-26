import {ElementHelper} from '@utils/ElementHelper'
import { Page } from '@playwright/test'
import { GooglePageObjects } from '@pages/pageObjects/GooglePageObjects';


let elementUtil :ElementHelper

export class GooglePage extends GooglePageObjects
{
    readonly page: Page;
    readonly name = 'Rohith Gundra'
    //readonly searchField = 'textarea[name="q"]';
    constructor(page:Page) {
        super();
        this.page = page;
        elementUtil = new ElementHelper(page);
    }
    async navigateToSite()
    {
        await elementUtil.navigateToSite(GooglePageObjects.SITEURL);
    }
    async searchText(text:string)
    {
        await elementUtil.writeTextToElement(GooglePageObjects.SEARCHFIELD,text);
        await elementUtil.pressKeyonElement(GooglePageObjects.SEARCHFIELD,'Enter')
    }
}