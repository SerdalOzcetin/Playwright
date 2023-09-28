import { test, expect } from '@playwright/test';


test.beforeAll(async()=>{
    console.log("beforeAll...")
})

test.afterAll(async()=>{
    console.log("afterAll...")
})

test.beforeEach(async()=>{

    console.log("Before Each...")
})

test.afterEach(async ()=>{

    console.log("AfterEach...")
})

test.describe.skip("Group01",async ()=>{

    test("Test 01", async ({page})=>{

        console.log("Test 01 ...")
    
    });
    
    test("Test 02", async ({page})=>{
    
        console.log("Test 02 ...")
    
    });
    
})

test.describe("Group 02",async ()=>{

    test("Test 03", async ({page})=>{

        console.log("Test 03 ...")
    
    });
    
    test("Test 04", async ({page})=>{
    
        console.log("Test 04 ...")
    
    });

})
