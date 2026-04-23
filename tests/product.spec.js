import{test,expect}from'@playwright/test';
test('launch url',async ({page}) => {
    await page.goto("https://www.myntra.com/boy-tshirts");
    await page.waitForTimeout(5000);
    await page.screenshot({path: 'myntra.png'});
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(5000);
    await page.screenshot({path : 'amazon.png'});
    await page.goto('https://www.youtube.com/'); 
    await page.waitForTimeout(5000);
    await page.screenshot({path:'youtube.png'});
    await page.goto('https://www.facebook.com/');
    await page.waitForTimeout(5000);
    await page.screenshot({path:'facebook.png'});
    await page.goto('https://www.flipkart.com/');
    await page.waitForTimeout(5000);
    await page.screenshot({path:'flipkart.png'});
 

    
    
    // await page.goBack();
    // page.goForward();
    // page.reload();
    
    
});
// test('amazon url',async ({page}) => {
    // await page.goto("https://www.amazon.in/");
    // await page.waitForTimeout(2000);
    // await page.screenshot({path : 'amazon.png'})

// });