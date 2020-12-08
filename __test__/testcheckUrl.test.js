// Import the js file to test

import { checkForUrl } from "../src/client/js/urlChecker"
test('as expected',()=>{
    expect(checkForUrl("https://www.hello.com")).toBeTruthy()
    expect(checkForUrl("www.google.com")).toBeFalsy()
})
test('as expected',()=>{
    expect(checkForUrl("https://www.google.com")).toBeTruthy()
    expect(checkForUrl("https ://www.google.com")).toBeFalsy()
})
test('as expected',()=>{
    expect(checkForUrl("https://www.bing.com")).toBeTruthy()
    expect(checkForUrl("https:\\www.bing.com")).toBeFalsy()
})
test('as expected',()=>{
    expect(checkForUrl("https://www.gmail.com")).toBeTruthy()
    expect(checkForUrl("www.http://www.k.com")).toBeFalsy()
})
test('as expected',()=>{
    expect(checkForUrl("https://www.udacity.com")).toBeTruthy()
    expect(checkForUrl("https:/www.bing.com")).toBeFalsy()
})
