//page.frame() --- old way
//page.frameLocator() --- new way
// syntax for frameLocator --- page.frameLocator('iframe[name="frame-name"]').click();
// page.frameLocator('iframe[name="frame-name"]').locator('selector').click();
//await page.frameLocator('#singleframe').locator('input[type="text"]').click();
// import { test, expect } from '@playwright/test';

// test('frame locator test', async ({ page }) => {
// // await page.frameLocator('parent-frame').frameLocator('child-frame').locator('button').click();
// // const frame = page.frameLocator('parent');
// // await frame.frameLocator('child-frame').locator('button').click();
// await page.goto('https://the-internet.herokuapp.com/nested_frames');
// const childFrame = page.frameLocator('frame[name="frame-top"]').frameLocator('frame[name="frame-middle"]');
// const text = await childFrame.locator('#content').textContent();
// await page.waitForTimeout(2000);
// console.log(text);

// });
// mouse actions
// click()
// doubleClick()
// rightClick()
// hover()
// click({button:'right'}) => cocntextclick or right click
// click({button:'left'}) => left click
// click({button:'middle'}) => middle click 
// page.dragAndDrop(source,target)
// source.dragTo(target)
// mouse.up()
// mouse.down()
// mouse.move(x,y)
// mouse.wheel(deltaX,deltaY)

// Keyboard actions
// page.keyboard.press('Enter') => press enter key
// page.keyboard.press('Control+A') => select all
// page.keyboard.press('Control+C') => copy
// page.keyboard.press('Control+V') => paste
// page.keyboard.type('text') => type text character by character
// .fill() => fill the input field with the given text at once without any delay and deletes the existing text in the input field before filling the new text
// .type() => type the text character by character with a delay between each character and does not delete the existing text in the input field before typing the new text
