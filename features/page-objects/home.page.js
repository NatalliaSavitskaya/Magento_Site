import {page} from `./page.js`;
import {browser} from `@wdio/globals`;

class HomePage extends Page {
 async open() {
    await browser.navigateTo(`https://magento.softwaretestingboard.com/`); // function for navigating to the sertain page that is passed as parameter
    }
}

export default new HomePage ();