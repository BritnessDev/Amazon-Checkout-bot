const puppeteer = require('puppeteer');
require('dotenv').config();
(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});
  await page.goto('https://www.amazon.in/');
  const [response] = await Promise.all([
    page.waitForNavigation(),
    page.click("#nav-link-accountList"),
  ]);
  await page.type('#ap_email', process.env.USERNAME);
  const [response1] = await Promise.all([
    page.waitForNavigation(),
    page.click("#continue-announce"),
  ]);
  await page.type('#ap_password', process.env.PASSWORD);
  const [response2] = await Promise.all([
    page.waitForNavigation(),
    page.click("#signInSubmit"),
  ]);
  await page.type('#twotabsearchtextbox','22 inch lg monitor');
  await page.keyboard.press('Enter')

//   const pageTarget = this._page.target(); //save this to know that this was the opener
//   await resultItem.element.click(); //click on a link
//   const newTarget = await this._browser.waitForTarget(target => target.opener() === pageTarget); //check that you opened this page, rather than just checking the url
//   const newPage = await newTarget.page(); //get the page object
//   // await newPage.once("load",()=>{}); //this doesn't work; wait till page is loaded
//   await newPage.waitForSelector("#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(8) > div > span > div > div > div:nth-child(2) > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20 > div > div > div:nth-child(1) > h2 > a > span"); //wait for page to be loaded
  
const [popup] = await Promise.all([
    new Promise((resolve) => page.once('popup', async p => {
      await p.waitForNavigation({ waitUntil: 'networkidle0' });
      resolve(p);
    })),
    page.click("#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(8) > div > span > div > div > div:nth-child(2) > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20 > div > div > div:nth-child(1) > h2 > a > span")
  ]);
  
  const [response4] = await Promise.all([
    newPage.waitForNavigation(),
    newPage.click("#buy-now-button"),
  ]);
  await newPage.type('#ap_password', process.env.PASSWORD);
  const [response5] = await Promise.all([
    newPage.waitForNavigation(),
    newPage.click("#signInSubmit"),
  ]);
  await browser.close();
})();
