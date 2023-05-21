const {
    Builder,
    By
} = require("selenium-webdriver");
var should = require("chai").should();

// Describe block
describe("Add Book Button: Valid Inputs", function() {

    // It block
    it("TC001: Successfully add book to library using valid inputs", async function() {

        // Launch FireFox
        let driver = await new Builder().forBrowser("firefox").build();

        // Navigate to target URL
        await driver.get("https://ted-v.github.io/book-logger/")

        // Enter book title
        await driver.findElement(By.id('title')).sendKeys('The Odyssey');

        // Enter author
        await driver.findElement(By.id('author')).sendKeys('Homer');

        // Enter page count
        await driver.findElement(By.id('pages')).sendKeys('384');

        // Add book to library
        await driver.findElement(By.id('submit-btn')).click();

        // Get Title of the most recently added book
        let bookTitle = await driver.findElement(By.xpath("/html/body/div/div[2]/div[last()]/h1")).getText().then(function(value) {
            return value;
        });

        // Assert using Chai should
        bookTitle.should.equal("The Odyssey");

        // Close the browser
        await driver.quit()

    });

});