const puppeteer = require('puppeteer');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async () => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    try {
        await page.goto('https://monkeytype.com/')
        await page.click('#cookiePopup > div.main > div.buttons > div.button.active.acceptAll')
        await sleep(3000)
        for (let i = 0; true; i++) {
            const monkey = await page.evaluate(() => {
                var text = document.querySelector('#words > div.word.active').innerText
                return text;
            })
            var input = monkey;
            await page.keyboard.type(input)
            await page.keyboard.press('Space');
        }
    } catch (e) {
        console.log("stop");
    }

})()

