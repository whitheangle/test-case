import { test, expect } from '@playwright/test';
test('click test', async ({ page }) => {
    await page.goto("https://www.amazon.in/Neopticon-Student-Celeron-Expandable-Graphics/dp/B0G2MT8YVV/ref=sr_1_4?crid=3VFJKZ35TBTSJ&dib=eyJ2IjoiMSJ9.Oo3eBomK0g8PVolVNtw6BYoess0caD5WjXAgQQoDdW_abFEzcjo1LjxH_WuRZ2zJN6Z1VU-CRgkfHQiwOwweyqMx84B9z4Wq2m0szhtCtBV1tzKckkv1lcInizGqpAQ3IhHsFxWZk19g-pIk5te9IMX-DoK78D04agqSsFY0IrHIhpDSEs9A57LAo4Ap1pV1v9eQSjLulYtC5q8uJpEUVXpUiVO5AYdm0kXWuk6xh1U.ob6JI9mtY4lPkMZyPuo1hvVIe4mu3fj0AYqVeimZpHM&dib_tag=se&keywords=laptop&qid=1777001683&sprefix=laptop%2Caps%2C437&sr=8-4");
    await page.waitForTimeout(3000);
    await page.locator('//div[@data-csa-c-slot-id="newAccordionRow_0"]/descendant::div[@class="a-button-stack"]/descendant::input[@id="add-to-cart-button"]').click();
    await page.waitForTimeout(3000);       
    await page.screenshot({ path: 'click.png' });
});