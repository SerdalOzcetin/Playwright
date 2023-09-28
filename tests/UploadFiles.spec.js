import { test, expect } from '@playwright/test';

test("Upload Single Files",async({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.waitForSelector("#filesToUpload");

    // Single file
    // await page.locator("#filesToUpload").setInputFiles("/home/serdal/Documents/playwirghtAutomation/tests/uploadfiles/Coverletter.docx");

    // Multiple files Upload

    await page.locator("#filesToUpload").setInputFiles(["/home/serdal/Documents/playwirghtAutomation/tests/uploadfiles/Coverletter.docx",
                                                        "/home/serdal/Documents/playwirghtAutomation/tests/uploadfiles/Coverletter (copy).docx"]);

    await page.waitForTimeout(2000);

    // Remove the files

    await page.locator("#filesToUpload").setInputFiles([]);

    await page.waitForTimeout(2000);


})
