import {expect, test} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {createHtmlReport} from "axe-html-reporter";
import {allure} from 'allure-playwright'

test.describe('Accessibilty Tests',()=>
{
    test.beforeAll(()=>
    {
        allure.suite("RG_Automation");
//        allure.name("Automated Execution Report")
    })
    test('FullPageAccessibilityTest', async ({ page },testInfo) =>
    {
        await page.goto('https://ultimateqa.com/automation');
        const ScanResults = await new AxeBuilder({ page }).analyze();
        const report  = createHtmlReport(
        {
            results:ScanResults,
            options:
            {
                outputDir : "axe-reports",
                reportFileName: testInfo.title + ".html"
            }
        });
        expect(ScanResults.violations).toEqual([]);
    });
    test('TargetElementScan', async ({ page },testInfo) =>
    {
        await page.goto('https://ultimateqa.com/simple-html-elements-for-automation/');
        await page.locator('.et_pb_column_1_3.et_pb_column_4').waitFor();
        const ScanResults = await new AxeBuilder({ page })
            .withTags(['wcag21a', 'wcag21aa'])
            .include('.et_pb_column_1_3.et_pb_column_4')
            .analyze();
        const report  = createHtmlReport({
            results:ScanResults,
            options:{
                outputDir : "axe-reports",
                reportFileName: testInfo.title + ".html"
            }
        });
        expect(ScanResults.violations).toEqual([]);
    });
});
