import test from '@utils/BaseTest'
import { expect } from '@playwright/test';
test('Google Search test',async ({googlePage,page}) => {
    googlePage.navigateToSite()
    googlePage.searchText('Rohith Gundra');
    const link = await page.locator('h3.LC20lb.MBeuO.DKV0Md').nth(0).textContent;
    await expect(link).toContain('Rohith');
})