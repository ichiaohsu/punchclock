const puppeteer = require('puppeteer');
const config = require('./config');

(async () => {
    const browser = await puppeteer.launch({headless:false, devtools:true});
    // const page = await browser.newPage();
    let pages = await browser.pages();
    const page = pages[0];
    await page.goto('https://mirrormedia.asia/SCSWeb/Login.aspx');
    await page.type('#txtUserName_I', config.user);
    await page.type('#txtPassword_I', config.password);
    await page.click('#btnLogin_CD');

    let punch_page = await browser.newPage();
    await punch_page.goto('https://mirrormedia.asia/scsweb/HRM/ATT/AttEmpOnlineSwipe.aspx'); 
    await punch_page.hover('#btnOffSwipe');
    await punch_page.click('#btnOffSwipe');
    // const sidebar = await page.mainFrame().childFrames()[1];
    // await page.waitForNavigation({ waitUntil: 'networkidle0' }); 
    // for (const frame of page.mainFrame().childFrames()){
    //     console.log('find a frame');
    //     console.log(frame.url());
    //     console.log(frame.name());
    // }
    // const menu_frame = frames.find(f => f.name() === 'ErpFrameMenu');
    // console.log(menu_frame);
    // const expand_btn = menu_frame.$('#treeView_CD > ul > li:nth-child(1) > span > img', (element) => element.click());

    // console.log(tree_btn)
    // tree_btn.click()
    // await page.click('#treeView_N0_0_0_7');

    await browser.close();
})();