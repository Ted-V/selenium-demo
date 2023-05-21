const {
    Builder,
    By
} = require("selenium-webdriver");
var should = require("chai").should();

// Description of tests
describe("Delete Book Button", function() {

    // Test F1 description
    it("TC004: Clicking the Delete button on a book at random deletes that book from the library", async function() {

        // Launch FireFox
        let driver = await new Builder().forBrowser("firefox").build();

        // Navigate to target URL
        await driver.get("https://ted-v.github.io/book-logger/");

        // Get all books before delete operation
        let initialBooksArr = await driver.findElements(By.className("delete-btn"));

        // Record total number of books
        let totalBooks = initialBooksArr.length;

        // Generate random number
        let randomNum = Math.floor(Math.random() * totalBooks + 1);

        // Click the delete button that has an ID of randomNum
        await driver.findElement(By.id(`${randomNum}`)).click();

        // Delete the book that has an ID of randomNum from array
        initialBooksArr.splice((randomNum - 1), 1);

        // Convert to JSON for comparison 
        let initialBooksJSON = JSON.stringify(initialBooksArr);

        // Get all books after delete operation    
        let finalBooksArr = await driver.findElements(By.className("delete-btn"));

        // Convert to JSON for comparison
        let finalBooksJSON = JSON.stringify(finalBooksArr);

        // Verify that the targeted book was deleted
        initialBooksJSON.should.equal(finalBooksJSON);

        // Close the browser
        await driver.quit();

    })

});