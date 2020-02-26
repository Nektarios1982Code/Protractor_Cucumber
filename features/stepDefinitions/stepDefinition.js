var { Given, When, Then, Before, BeforeAll, After, AfterAll } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

Given(/^I go to "([^"]*)"$/, function (site) {
    return browser.get(site);
});

Then(/^I found the title as "([^"]*)"$/, function (title) {
    var actualTitle = browser.getTitle();
    return expect(actualTitle).to.eventually.equal(title);
});