const {
    Builder,
    By
} = require("selenium-webdriver");
var should = require("chai").should();

// Description of tests
describe("Toggle Reading Status Button", function() {

    // Test F1 description
    it("TC005: Clicking the toggle reading status button on a book at random toggle's that books reading status", async function() {

        // Launch FireFox
        let driver = await new Builder().forBrowser("firefox").build();

        // Navigate to target URL
        await driver.get("https://ted-v.github.io/book-logger/");

        // Get total amount of books in library
        let totalBookCount = await driver.findElements(By.className("delete-btn")).length;

        // Generate a random number
        let randomNum = Math.floor(Math.random() * totalBookCount + 1);

        // Get the current reading status on the book
        let initialReadingStatus = await driver.findElement(By.xpath("/html/body/div/div[2]/div[" + `"${randomNum}"` + "]/button[1]")).getText();

        // Click the toggle reading status button on the book with an ID of randomNum
        await driver.findElement(By.xpath("/html/body/div/div[2]/div[" + `"${randomNum}"` + "]/button[1]")).click();

        // Get updated reading status
        let updatedReadingStatus = await driver.findElement(By.xpath("/html/body/div/div[2]/div[" + `"${randomNum}"` + "]/button[1]")).getText();
        
        // Verify reading status changed
        if (initialReadingStatus == "Complete") {
            updatedReadingStatus.should.equal("Incomplete")
        } else {
            updatedReadingStatus.should.equal("Complete");
        }
        
        // Close browser
        await driver.quit()
    })

});
