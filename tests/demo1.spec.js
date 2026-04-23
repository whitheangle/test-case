import{test,expect}from'@playwright/test';
test('launch url',async ({page}) => {
    await page.goto("https://en.wikipedia.org/wiki/Main_Page");
    await page.waitForTimeout(3000);
    await page.goto('https://www.youtube.com/') 
    await waitForTimeout(2000);
    await page.goBack();
    page.goForward();
    page.reload();
    
})
import{test} from '@playwright/test';
test('locating the elements',async({page}) => {
await page.goto("https://www.amazon.in");
})