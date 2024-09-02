/**
 * @jest-environment puppeteer
 */
const ShellJS = require('shelljs');
const path = require('path');
require('expect-puppeteer');
 
ShellJS.exec(`extwee -c -s dist/format.js -i ${path.join(__dirname, 'index.twee')} -o ${path.join(__dirname, 'index.html')}`);
   
describe('Cookbook - Player Statistics', () => {
     beforeAll(async () => {
        await page.goto(`file://${path.join(__dirname, 'index.html')}`);
     });
 
     afterAll(async () => {
        ShellJS.rm(`${path.join(__dirname, 'index.html')}`);
     });
  
    it('Should display increased empathy value', async () => {
        await page.click('[id="empathyIncrease"]');
        await expect(page).toMatchTextContent('Empathy: 11');
    });
});