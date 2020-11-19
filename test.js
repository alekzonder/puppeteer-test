const puppeteer = require('puppeteer');


async function main() {
  const browser = await puppeteer.launch({headless: true});

  const page = await browser.newPage();
  await page.goto('https://my.beeline.ru');

  await page.type('[id="loginFormB2C:loginForm:login"]', '123');

  await page.type('[id="loginFormB2C:loginForm:passwordPwd"]', '123');

  await page.screenshot({path: 'screenshot.png'});

  await browser.close();
}

main();
