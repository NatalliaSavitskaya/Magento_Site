import {Given,When,Then} from '@wdio/cucumber-framework'
import page from "../page-objects/page.js";

Given (`I am on home page`, async function(){
await page.open();
})