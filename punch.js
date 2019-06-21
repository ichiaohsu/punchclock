const puppeteer = require('puppeteer');
const config = require('./config');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://mirrormedia.asia/SCSWeb/Login.aspx');
    await page.type('#txtUserName_I', config.user);
    await page.type('#txtPassword_I', config.password);
    await page.click('#btnLogin_CD');

    await browser.close();
})();