import { test as baseTest } from "@playwright/test";
import  {GooglePage}  from '@pages/pageRepository/GooglePage'

const test = baseTest.extend<
{
googlePage : GooglePage;
}>({
    googlePage: async({page},use)=>{
        await use (new GooglePage(page))
    }
})
export default test
