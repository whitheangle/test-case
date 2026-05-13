import{test,expect} from '@playwright/test';
test('amazon functionality' ,async({page})=>{
await page.goto("https://www.amazon.in/");
await page.waitForTimeout(2000);
await page.fill('//input[@id="twotabsearchtextbox"]','mobile');
await page.keyboard.press("Enter");
await page.waitForTimeout(3000);
await page.click('//ul[@data-csa-c-content-id="91049095031"]/descendant::span[@class="a-declarative"]/descendant::li[@aria-labelledby="-title"]/descendant::a[@aria-label="Apply the filter Samsung to narrow results"]/descendant::i[@class="a-icon a-icon-checkbox"]');
await page.waitForLoadState();0
await page.waitForTimeout(3000);


//   await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('slider', { name: 'Maximum price' }).fill('62');

// //.mouse.move(-5,0).click();
await page.waitForTimeout(3000);
});