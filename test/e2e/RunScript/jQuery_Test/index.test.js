/**
 * @jest-environment puppeteer
 */
 const ShellJS = require('shelljs');
 const path = require('path');
 require('expect-puppeteer');
 
 // Create the index.html file to test
 ShellJS.exec(`extwee -c -s dist/format.js -i ${path.join(__dirname, 'index.twee')} -o ${path.join(__dirname, 'index.html')}`);
  
 describe('RunScript - jQuery Test', () => {
   beforeAll(async () => {
    await page.goto(`file://${path.join(__dirname, 'index.html')}`);
   });

   afterAll(async () => {
    ShellJS.rm(`${path.join(__dirname, 'index.html')}`);
   });
 
   it('Should display greeting', async () => {
        await expect(page).toMatchTextContent('Hi');
   });
 });