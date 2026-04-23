import{test,expect}from'@playwright/test';
import{count,log }from 'node:console';
test('launch url',async({page})=>{


    // await page.goto("https://www.myntra.com/men-tshirts");
    await page.goto("https://www.myntra.com/");
    const cou =  await page.locator('//li[@class = "product-base"]').count();
    console.log('number of t.shirt :' +cou);

    

})