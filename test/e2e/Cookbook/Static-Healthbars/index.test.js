/**
 * @jest-environment puppeteer
 */
const ShellJS = require('shelljs');
const path = require('path');
require('expect-puppeteer');
 
ShellJS.exec(`extwee -c -s dist/format.js -i ${path.join(__dirname, 'index.twee')} -o ${path.join(__dirname, 'index.html')}`);
  
describe('Cookbook - Static Healthbars', () => {
    beforeAll(async () => {
        await page.goto(`file://${path.join(__dirname, 'index.html')}`);
    });

    afterAll(async () => {
        ShellJS.rm(`${path.join(__dirname, 'index.html')}`);
    });
 
    it('Should display meter', async () => {
        // Wait for the <meter>.
        await page.waitForSelector('meter');
        // Check for the text before it.
        await expect(page).toMatchTextContent('Show a healthbar using a Meter element:');
    });
});