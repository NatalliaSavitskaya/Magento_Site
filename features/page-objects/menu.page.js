import { Page } from './page.js';
import { browser } from '@wdio/globals';

class MenuPage extends Page {
    async selectMenuItem(menuItems) {   // Pass the path to the page from menu ("Women->Tops->Jackets")
        for (const [i, menuItem] of menuItems.entries()) {
            let el;
            await browser.waitUntil(async function() {            // Wait until at least one element with the specified text is displayed
                const elements = await $$(`//nav//span[text()="${menuItem}"]`);   // return an array of elements based on specified selector ([Women,Tops,Jackets]
                for (const element of elements) {
                    const isDisplayed = await element.isDisplayed();
                    if (isDisplayed) {
                        el = element;    // As soon as an element is Displayed remember it to variable "el"
                        return true;
                    }
                }
                return false;
            });
            if (i === menuItems.length-1) {
                await el.click();    // click the last element from the array (Jackets)
            } else {
                await el.moveTo();  // move the mouse to the next element of the array (Women,Tops)
            }
        }
    }
}

export default new MenuPage();