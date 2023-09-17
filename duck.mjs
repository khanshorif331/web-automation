import puppeteer from "puppeteer";
import {setTimeout} from 'timers/promises'

const browser = await puppeteer.launch({
    headless:false,
    defaultViewport:{width:1920,height:1000},
    slowMo:250,
    userDataDir:'temporary',
    executablePath:'/usr/bin/chromium-browser'
})
const page = await browser.newPage()
await page.goto('https://duckduckgo.com',{waitUntil:'networkidle2'})
await page.waitForSelector('#search_form_input_homepage')
await page.type('#search_form_input_homepage','devconfbd')
await page.click('#search_button_homepage')
await page.waitForSelector('[data-testid="result-title-a"]')
await setTimeout(1000)
await page.screenshot({
    path:"duckduck.png"
})
await browser.close()

// #searchbox_input
// #search_button
// [data-testid="result-title-a"]