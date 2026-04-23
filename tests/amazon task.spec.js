import{test}from '@playwright/test';
import { log } from 'node:console';
test('amazon task' ,async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('Laptop');
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    await page.waitForTimeout(3000);
    await page.locator('//span[contains(text(),"ASUS Vivobook S14")]').first().click();
    await page.waitForTimeout(3000);
    // await page.locator('JUIIIUU87"]').click();
    // await page.waitForTimeout(3000);
    const addtocart =await page.locator('//a[@href="/dp/B0FMRV42V9"]');
     
    if(await addtocart.isVisible()){
        console.log("added to cart")
    }
    else{
        console.log("producted is not added");
        
    }
    await page.screenshot({path:'amazon_laptop.png'});
    await page.waitForTimeout(2000);

    // await text.click() ;
    // await page.locator('')

    // await page.click('#a-autoid-5-announce');
    // await page.getByRole('link', { name: '/sspa/click?ie=UTF8&spc=MTo4OTQ1ODA4MjQzODcyNTUyOjE3NzYxNDg0MDE6c3BfYXRmOjMwMDk4NDE1MTYxODczMjo6MDo6&url=%2FLenovo-IdeaPad-i5-13420H-Keyboard-83K100PLIN%2Fdp%2FB0FCY7BTCX%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1CUOGD74ROFCD%26dib%3DeyJ2IjoiMSJ9.jFjHDcag5AiDDSvrlsP0CaskGcV6AEpk-LFW-PmlsDkE5enj1pFyjg3aESHGBwYGg40dmdyfitTfPpSEshGNxfJIbeh_hrmwrKoEBC0oGrsyV6WN3HUzfpvXItt_Sjih9dAXeiFSQG23bV493MzZ0AqokdmpghAWirVmOk3jJXHBzATRn4EroCtxYk1l1Fo3nA2dhBE2VUAF2YGFrOfs-asDho91pcHvG0FK6wBpKik.NDdVITTm6tjr1JidekHodMrLZKTyV4yGmlkLZYYetRk%26dib_tag%3Dse%26keywords%3Dlaptop%26qid%3D1776148401%26sprefix%3Dlaptop%252Caps%252C660%26sr%3D8-1-spons%26aref%3DjEYpKjyC4p%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=jEYpKjyC4p&sp_cr=ZAZ' }exact:true).click();

   // const count = await page.locator('//div[@data-component-type="s-search-result"]').count();
    // console.log('number of iphone 14 :' +count);
});
 