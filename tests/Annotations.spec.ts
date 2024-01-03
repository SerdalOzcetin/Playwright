import { test, expect } from '@playwright/test';


test('Fix me', async ({})=>{

    test.fixme();
    console.log("Until fixme is removed, this test will skip...")
})

test("Skip on condition",async ({browserName})=>{

    console.log("Skip on condition that....")

    if(browserName==='chromium'){

        test.skip();
    }

})



// test.only('Only Ant',async ({})=>{

//     console.log("Only Run this... ")

// })

// test.only('Only Ant',async ({})=>{

//     console.log("Only Run this 02... ")

// })


// Fail

// test("Fail",async ({})=>{

//     test.fail();
//     console.log("Test 01 ....")
//     expect(1).toBe(2); // If both exp & Actual is failed then test pass

// })

// test("Fail",async ({page, browserName})=>{

//     console.log("Test 01 ....")

//     if(browserName==='chromium'){

//         test.fail();

//     }



// })

test("slow",async ({page})=>{

    // test.slow();

    test.setTimeout(5000);
    
    await page.goto("https://www.demoblaze.com/");
    console.log("Test o1 ....");



})