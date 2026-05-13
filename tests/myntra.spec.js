import{test} from '@playwright/test';
test('myntra price',async({page}) => {
    // webpage
await page.goto("https://www.myntra.com/");
await page.waitForTimeout(3000);
// mouse hover 
await page.locator('//div[@data-reactid="20"]').hover();
await page.waitForTimeout(3000);
//t-shirt option click
await page.locator('//div[@data-reactid="20"]/descendant::li[@data-reactid="30"]').click();
await page.waitForTimeout(3000);
 
// /descendant:: /ancestor:: /following::
// to count all t-shirt
const cou =  await page.locator('//li[@class = "product-base"]').count();
console.log('number of t.shirt :' +cou);

//cout of all price of tshirt

const totalprices = await page.locator('.product-price').count();    
console.log('Total prices: '+totalprices);

//count of discount price

const namesText = await page.locator('.product-discountedPrice').count();
console.log("count Of discount prices:",+namesText);
//min value

const pricesText = await page.locator('.product-discountedPrice').allTextContents();
// console.log("Prices array:", pricesText);
const minval = pricesText.reduce((minIdx, curr, idx) => {
const mintext = parseFloat(pricesText[minIdx].replace(/[^\d.]/g, ''));
const currVal = parseFloat(curr.replace(/[^\d.]/g, ''));
return currVal < mintext ? idx : minIdx;
}, 0);

const minPriceText = pricesText[minval];
console.log("Minimum price (original format):", minPriceText);

const productName = await page.locator('//span[@class="product-discountedPrice"]/ancestor::li[@class="product-base"]/descendant::h3[@class="product-brand"]').nth(minval).textContent();


console.log("Product name:", +productName);  
 });


//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice"]