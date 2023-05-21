const {Builder, By} = require("selenium-webdriver");
var should = require("chai").should();

// Description of tests
describe("Add Book Button: Invalid Inputs", function(){

    // Test 2 description
    it("TC002: Fails to add book to library using no input", async function(){
    
    // Launch FireFox
    let driver = await new Builder().forBrowser("firefox").build();

    // Navigate to target URL
    await driver.get("https://ted-v.github.io/book-logger/")

    // Get Title of the most recently added book
    let latestBookTitle = await driver.findElement(By.xpath("/html/body/div/div[2]/div[last()]/h1")).getText().then(function(value){
        return value;
    });

    // Store the title of the last book added
    let lastBook = latestBookTitle;

    // Attempt to Add blank book to library
    await driver.findElement(By.id('submit-btn')).click();

    // Get Title of the most recently added book, again
    await driver.findElement(By.xpath("/html/body/div/div[2]/div[last()]/h1")).getText().then(function(value){
        return value;
    });

    // Verify no book has been added
    latestBookTitle.should.equal(`${lastBook}`);

    // Close the browser
    await driver.quit()

    });

    // Test 3 description
    it("TC003: Fails to add book to library when a Title input is missing", async function(){
    
        // Launch FireFox
        let driver = await new Builder().forBrowser("firefox").build();

        // Navigate to target URL
        await driver.get("https://ted-v.github.io/book-logger/")

        // Get Title of the most recently added book
        let latestBookTitle = await driver.findElement(By.xpath("/html/body/div/div[2]/div[last()]/h1")).getText().then(function(value){
            return value;
            });

        // Store the title of the last book added
        let lastBook = latestBookTitle;

        // Enter author
         await driver.findElement(By.id('author')).sendKeys('Homer');

        // Enter page count
        await driver.findElement(By.id('pages')).sendKeys('384');

        // Add book to library
        await driver.findElement(By.id('submit-btn')).click();
        
        // Verify no book has been added
        latestBookTitle.should.equal(`${lastBook}`);

        // Close the browser
        await driver.quit()

    })

});