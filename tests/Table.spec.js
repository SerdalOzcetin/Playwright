import { test, expect } from '@playwright/test';

test('Table', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table =  page.locator("#productTable ");
    const columns = table.locator("thead tr th");
    console.log("Number of columns : " , await columns.count());

    expect(await columns.count()).toBe(4);

    const rows = table.locator(" tbody tr");
    console.log("Number of rows : ", await rows.count());

    expect(await rows.count()).toBe(5);

    // select the product 4

    const machedRow = rows.filter({

        has: page.locator("td"),
        hasText: "Product 4"

    })

    await machedRow.locator("input").check();

    // Multiple choose

    await selectProduct(rows, page, "Product 1");

    await selectProduct(rows, page, "Product 3");

    await selectProduct(rows, page, "Product 5");

    await page.waitForTimeout(2000);

    const pages = page.locator("#pagination li a");
    console.log("number of pages in the table : ", pages.count());

    for(let p =0;p<await pages.count();p++){
        
      if(p>0){

        await pages.nth(p).click();

      }
        

        for(let i = 0; i<await rows.count() ; i++){

            const row = rows.nth(i)
            const tds = row.locator("td");
    
            for(let j = 0; j<await tds.count(); j++){
    
                console.log(await tds.nth(j).textContent());
               

            }
    
        }

        await page.waitForTimeout(1000);
    }


})

async function selectProduct (rows, page, name){

    const machedRow = rows.filter({

        has: page.locator("td"),
        hasText: name

    })

    await machedRow.locator("input").check();

}

