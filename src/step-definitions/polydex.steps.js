// var chai = require('chai');
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);
// var expect = chai.expect;

// // import { defineSupportCode } from 'cucumber';
// var {defineSupportCode} = require('cucumber')

// // module.exports = function() {

// defineSupportCode(({ Given, Then }) => {
//   Given(/^the title is "([^"]*)"$/, checkPageTitle);
//   Then(/^check the "([^"]*)" button$/, checkLogin);


//   function checkPageTitle(expPagetitle){
//     browser.url("https://spartans.boschma.net/moneytransfer");
//     // browser.debug();
//     const title = browser.getTitle();
//     console.log(title)
//     expect(title).equal(expPagetitle);
//   }

//   function checkLogin(expLink){
//     // browser.click('a[href="/api.html"]');C
//     // browser.click('a[href="/2.0/start/"]')
//     // var test = browser.isVisible('a[href="/2.0/start/"]');
//     // console.log(test);
//     // browser.waitForVisible('a[href="/2.0/start/"]',10000);
//     // browser.click('a[href="/2.0/start/"]')
//     // browser.click("=Start")
//     const selector = 'my-demo-app app-toolbar iron-selector .drawer-list';
//     // const selectorVisible = 'shop-app shop-list header h1';

//     browser.waitForVisible(selector);
//     // const shopHomeVisible =
//     browser.click(selector);
//     // browser.waitForVisible(selector);
//     const elemvisible = browser.isVisible(selector);
//     console.log(selector);
//     expect(selector).equal(true);
//   }

// });
