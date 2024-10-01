const page = require('../../page')


describe('The dropdown menu for categories function properly', async () => {
    it('Should redirect you to the "Video" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressVideo = await $(page.ddVideo);
        await pressVideo.click();
        await expect($(page.ddArrow)).toHaveText('Video News');
    }),

    it('Should redirect you to the "A.I. News" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressAI = await $(page.ddAI);
        await pressAI.click();
        await expect($(page.ddArrow)).toHaveText('A.I. News');
    }),

    it('Should redirect you to the "Sustainability" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressSus = await $(page.ddSustainability);
        await pressSus.click();
        await expect($(page.ddArrow)).toHaveText('Sustainability News');
    }),

    it('Should redirect you to the "Happiness" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressHappy = await $(page.ddHappy);
        await pressHappy.click();
        await expect($(page.ddArrow)).toHaveText('Happiness News');
    }),

    it('Should redirect you to the "Entertainment" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressENT = await $(page.ddENT);
        await pressENT.click();
        await expect($(page.ddArrow)).toHaveText('Entertainment News');
    }),

    it('Should redirect you to the "Sports" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressSports = await $(page.ddSports);
        await pressSports.click();
        await expect($(page.ddArrow)).toHaveText('Sport News');
    }),

    it('Should redirect you to the "Conservative" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressConservative = await $(page.ddConservative);
        await pressConservative.click();
        await expect($(page.ddArrow)).toHaveText('Conservative News');
    }),

    it('Should redirect you to the "Liberal" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressLiberal = await $(page.ddLiberal);
        await pressLiberal.click();
        await expect($(page.ddArrow)).toHaveText('Liberal News');
    }),

    it('Should redirect you to the "Technology" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressTech = await $(page.ddTech);
        await pressTech.click();
        await expect($(page.ddArrow)).toHaveText('Technology News');
    }),

    it('Should redirect you to the "Business" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressBiz = await $(page.ddBiz);
        await pressBiz.click();
        await expect($(page.ddArrow)).toHaveText('Business News');
    }),

    it('Should redirect you to the "Health" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressHealth = await $(page.ddHealth);
        await pressHealth.click();
        await expect($(page.ddArrow)).toHaveText('Health News');
    }),

    it('Should redirect you to the "Travel" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const presstravel = await $(page.ddTravel);
        await presstravel.click();
        await expect($(page.ddArrow)).toHaveText('Travel News');
    }),

    it('Should redirect you to the "Lifestyle" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressLifestyle = await $(page.ddLifestyle);
        await pressLifestyle.click();
        await expect($(page.ddArrow)).toHaveText('Lifestyle News');
    }),

    it('Should redirect you to the "Breaking" category', async () => {
        await browser.url('/')
        const pressDD = await $(page.ddArrow);
        await pressDD.waitForDisplayed();
        await pressDD.click();
        const pressLifestyle = await $(page.ddLifestyle);
        await pressLifestyle.click();
        await pressDD.click();
        const pressBreaking = await $(page.ddBreaking);
        await pressBreaking.click();
        await expect($(page.ddArrow)).toHaveText('Breaking News');
    })
})