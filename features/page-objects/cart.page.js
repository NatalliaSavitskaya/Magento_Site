import { Page } from './page.js';
import { browser } from '@wdio/globals';

class CartPage extends Page {
    get firstRemoveItemButton() { return $('.actions-toolbar [title="Remove item"]'); }   
    get pageTitle() {return $('.page-title')}
    async open(){
       await browser.navigateTo(`https://magento.softwaretestingboard.com/checkout/cart/`);
       await expect(this.pageTitle).toHaveText("Shopping Cart");
    }
        
    async removeAllProducts(){
       await browser.waitUntil(async()=>{
        try {
            await this.firstRemoveItemButton.waitForDisplayed({timeout:20000});
            await this.firstRemoveItemButton.click();
            return false;
            // the element is visible    
            } catch {
            // the element is invisible, so the basket is empty
                return true;  
            }
        },
        {timeout: 30000}
        ); 
    }    
}

export default new CartPage();