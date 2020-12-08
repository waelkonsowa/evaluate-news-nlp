// Import the js file to test

import { checkConfidence } from "../src/client/js/formHandler"
test('as expected',()=>{
    expect(checkConfidence(51)).toEqual("confident")
    expect(checkConfidence(20)).toEqual("not confident")
    expect(checkConfidence(10)).not.toEqual("confident")
})
