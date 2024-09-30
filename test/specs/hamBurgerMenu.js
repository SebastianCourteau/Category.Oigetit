const page = require('../../page')

describe('The hamburger menu categories should direct user properly', async () => {
    it('Should direct you to the "Video" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressVideoBurger = await $(page.videoBurger);
        await pressVideoBurger.click();
        expect($(page.ddArrow)).toHaveText('Video News');
    }),

    it('Should direct you to the "A.I." categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressaiBurger = await $(page.aiBurger);
        await pressaiBurger.click();
        expect($(page.ddArrow)).toHaveText('A.I. News');
    }),

    it('Should direct you to the "Sustainability" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressSusBurger = await $(page.susBurger);
        await pressSusBurger.click();
        expect($(page.ddArrow)).toHaveText('Sustainability News');
    }),

    it('Should direct you to the "Happiness" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressHappyBurger = await $(page.happyBurger);
        await pressHappyBurger.click();
        expect($(page.ddArrow)).toHaveText('Happiness News');
    }),

    it('Should direct you to the "Entertainment" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressEntBurger = await $(page.entBurger);
        await pressEntBurger.click();
        expect($(page.ddArrow)).toHaveText('Entertainment News');
    }),

    it('Should direct you to the "Sports" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressSportBurger = await $(page.sportsBurger);
        await pressSportBurger.click();
        expect($(page.ddArrow)).toHaveText('Sport News');
    }),

    it('Should direct you to the "Conservative" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressRightBurger = await $(page.conserveBurger);
        await pressRightBurger.click();
        expect($(page.ddArrow)).toHaveText('Conservative News');
    }),

    it('Should direct you to the "Liberal" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressLeftBurger = await $(page.libBurger);
        await pressLeftBurger.click();
        expect($(page.ddArrow)).toHaveText('Liberal News');
    }),

    it('Should direct you to the "Technology" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressTechBurger = await $(page.techBurger);
        await pressTechBurger.click();
        expect($(page.ddArrow)).toHaveText('Technology News');
    }),

    it('Should direct you to the "Business" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressBizBurger = await $(page.businessBurger);
        await pressBizBurger.click();
        expect($(page.ddArrow)).toHaveText('Business News');
    }),

    it('Should direct you to the "Health" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressHealthBurger = await $(page.healthyBurger);
        await pressHealthBurger.click();
        expect($(page.ddArrow)).toHaveText('Health News');
    }),

    it('Should direct you to the "Travel" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressTravelBurger = await $(page.travelBurger);
        await pressTravelBurger.click();
        expect($(page.ddArrow)).toHaveText('Travel News');
    }),

    it('Should direct you to the "Lifestyle" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressLifeBurger = await $(page.lifeBurger);
        await pressLifeBurger.click();
        expect($(page.ddArrow)).toHaveText('Lifestyle News');
    }),

    it('Should direct you to the "Breaking" categery', async () => {
        await browser.url('/')
        const openHamburger = await $(page.hamBurger);
        await openHamburger.click();
        const pressSportBurger = await $(page.sportsBurger);
        await pressSportBurger.click();
        await openHamburger.click();
        const pressBrokenBurger = await $(page.breakingBurger);
        await pressBrokenBurger.click();
        expect($(page.ddArrow)).toHaveText('Breaking News');
    })
})