module.exports = {
    fillSearchBar: async function(searchbar) {
        const searchbarfield = await $(page.fillSearchBar);
        await searchbarfield.setValue(searchbar);
        await searchbarfield.waitForDisplayed();
        await searchbarfield.click();
    }

    
}