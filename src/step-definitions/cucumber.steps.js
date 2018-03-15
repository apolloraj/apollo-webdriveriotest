var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

// import { defineSupportCode } from 'cucumber';
var {defineSupportCode} = require('cucumber')

// module.exports = function() {

defineSupportCode(({ Given, Then }) => {
  Given(/^Launch the application "([^"]*)"$/, launchApp);
  Then(/^click on the "([^"]*)" link$/, clickLink);


  function launchApp(url,callback){
     browser.driver.get(url).then(callback);
    // const selector = 'shop-app shop-home shop-button a';
    // browser.debug();
    // browser.debug();
    // test
    // const selector = 'shop-app shop-home shop-button a';
    // browser.waitForVisible(selector);
    // browser.click(selector);
    // test line
  //   browser.getTitle().then(function(strtitle){
  //   console.log(title).then(callback);    
  //   // expect(title).equal(expPagetitle);
  //   // expect(title).contains(expPagetitle);
  // });
}

  function clickLink(expLink){
    // browser.click('a[href="/api.html"]');
    // browser.click('a[href="/2.0/start/"]')
    // var test = browser.isVisible('a[href="/2.0/start/"]');
    // console.log(test);
    // browser.waitForVisible('a[href="/2.0/start/"]',10000);
    // browser.click('a[href="/2.0/start/"]')
    // browser.click("=Start")
    const selector = 'shop-app shop-home shop-button a';
    // const selector = 'shop-app shop-home .item h2';
    // const selectorVisible = 'shop-app shop-list header h1';
    const selectorVisible = 'shop-app shop-list .grid shop-list-item .price';
    // const readImageText = 'shop-app shop-list shop-list-item shop-image div'

    browser.waitForVisible(selector);
    // const shopHomeVisible =
    // const testText = browser.getText(selector);
    // console.log(testText)
    
    browser.click(selector);
    browser.waitForVisible(selectorVisible);
    const elemvisible = browser.isVisible(selectorVisible);
    console.log(elemvisible);
    // browser.debug();
    const elemtext = browser.getText(selectorVisible);
    console.log(elemtext);
    // browser.click(selectorVisible);
    
    expect(elemtext).equal("$50.20");
    // const testText = browser.getText(readImageText);
    // console.log(testText);
  }

});
