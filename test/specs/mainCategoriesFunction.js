const page = require('../../page')

describe('When a category is selected user is brought to respective category', () => {
    it('Should select the "video" category', async () => {
        await browser.url(`/`)
            const selectVideo = await $(page.videoCat);
            await selectVideo.click();
            await expect(selectVideo).toHaveElementClass('category-item--active');
    }),

    it('Should select the "A.I. News" category', async () => {
        await browser.url(`/`)
            const selectAI = await $(page.aiCat);
            await selectAI.click();
            await expect(selectAI).toHaveElementClass('category-item--active');
    }),

    it('Should select the "Sustainability" category', async () => {
        await browser.url(`/`)
            const selectSustainability = await $(page.savePlanetCat);
            await selectSustainability.click();
            await expect(selectSustainability).toHaveElementClass('category-item--active');
    }),

    it('Should select the "Happiness" category', async () => {
        await browser.url(`/`)
            const selectHappy = await $(page.happyCat);
            await selectHappy.click();
            await expect(selectHappy).toHaveElementClass('category-item--active');
    }),

    it('Should select the "Entertainment" category', async () => {
        await browser.url(`/`)
            const selectEnt = await $(page.popcornCat);
            await selectEnt.click();
            await expect(selectEnt).toHaveElementClass('category-item--active');
    }),

    it('Should select the "Sports" category', async () => {
        await browser.url(`/`)
            const selectSports = await $(page.sportsCat);
            await selectSports.click();
            await expect(selectSports).toHaveElementClass('category-item--active');
    }),

    it('Should select the "Conservative" category', async () => {
        await browser.url(`/`)
            const selectRight = await $(page.rightBrainCat);
            await selectRight.click();
            await expect(selectRight).toHaveElementClass('category-item--active');
    }),

    it('Should select the "Liberal" category', async () => {
        await browser.url(`/`)
            const selectLeft = await $(page.leftBrainCat);
            await selectLeft.click();
            await expect(selectLeft).toHaveElementClass('category-item--active');
    }),

    it('Should select the "Technology" category', async () => {
        await browser.url(`/`)
            const selectTech = await $(page.technologyCat);
            await selectTech.click();
            await expect(selectTech).toHaveElementClass('category-item--active');
    }),

    it('Should select the "Business" category', async () => {
        await browser.url(`/`)
            const selectBiz = await $(page.businessCat);
            await selectBiz.click();
            await expect(selectBiz).toHaveElementClass('category-item--active');
    }),

    it('Should select the "Health" category', async () => {
        await browser.url(`/`)
            const selectHealth = await $(page.healthCat);
            await selectHealth.click();
            await expect(selectHealth).toHaveElementClass('category-item--active');
    }),

    it('Should select the "Travel" category', async () => {
        await browser.url(`/`)
            const selectTravel = await $(page.travelCat);
            await selectTravel.click();
            await expect(selectTravel).toHaveElementClass('category-item--active');
    }),

    it('Should select the "Lifestyle" category', async () => {
        await browser.url(`/`)
            const selectLife = await $(page.lifestyleCat);
            await selectLife.click();
            await expect(selectLife).toHaveElementClass('category-item--active');
    }),

    it('Should select the "Breaking" category', async () => {
        await browser.url(`/`)
            const selectBiz = await $(page.businessCat);
            await selectBiz.click();
            const selectBreaking = await $(page.breakingCat);
            await selectBreaking.click();
            await expect(selectBreaking).toHaveElementClass('category-item--active');
    })
})
