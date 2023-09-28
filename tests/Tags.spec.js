import { test, expect } from '@playwright/test';


test("Test01@sanity",async ({})=>{

    console.log("Test 01");

})

test("Test02@sanity",async ({})=>{

    console.log("Test 02");

})

test("Test03@reg",async ({})=>{

    console.log("Test 03");

})

test("Test04@reg",async ({})=>{

    console.log("Test 04");

})

test("Test05@sanity@reg",async ({})=>{

    console.log("Test 05");

})

// npx playwright test Tags.spec.js --project=chromium --headed --grep @sanity
// npx playwright test Tags.spec.js --project=chromium --headed --grep @sanity --grep-invert @reg
