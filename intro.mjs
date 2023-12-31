import puppeteer from "puppeteer";
import {setTimeout} from 'timers/promises'

const browser = await puppeteer.launch({
    // args: ["--no-sandbox", "--disabled-setupid-sandbox"],
    headless:false,
    defaultViewport:{width:1920,height:1000},
    slowMo:250,
    userDataDir:'temporary',
    executablePath:'/usr/bin/chromium-browser'
})
const page = await browser.newPage()
await page.goto("https://example.com",{
    waitUntil:'networkidle2',
    timeout:60000,
})
// await page.screenshot({path:"example.com.png"})
await page.goto("https://devconfbd.com")
await page.screenshot({
    path:"devconfbd.png"
})
await page.waitForSelector("img[alt='guest']");
await page.click("img[alt='guest']");
await setTimeout(1000)
await page.screenshot({path:"guest.png"})
await browser.close()