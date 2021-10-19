let exampleString = "This is a random sentence that I'm typing for example purposes";
let d2 = false;
let letter = "";
const stringLength = exampleString.length;
for (let i = 0; i < stringLength; i++) {
  //creating a d2
  if(Math.random() < 0.5) {
    d2 = true;
  } else {
    d2 = false;
  }
  //randomly change a letter to uppercase
  let theFront = "";
  let theRest = "";
  if(d2) {
    //get the uppercase letter
    letter = exampleString.charAt(i).toUpperCase(); 
    //get the front of the string minus the letter, substr doesn't do 0 so had to put in if not 0
    if(!i) {
      theFront = exampleString.charAt(0);
    }
    theFront = exampleString.substr(0, i);    
    //get the end of the string minus the letter making sure not out of bounds
    if(i < stringLength) {
      theRest = exampleString.substr(i+1, stringLength);
    } else {
      theRest = exampleString.charAt(stringLength);
    }
    //concatenate them
    exampleString = theFront + letter + theRest;    
  }   
}
const paragraph = document.querySelector("p");
paragraph.textContent = exampleString;
console.log(exampleString);

// # Example: Print 1-to-100 with a `for` Loop
// ## Terminology
// Initializer
// : This expression usually creates one or more loop counters, but the syntax allows an expression of any degree of complexity.

// Condition
// : If the value of condition expression is true, the loop iteration executes. If the value of condition is false, the loop terminates.

// Increment
// : The loop counter increments. This expression is usually `i++` but the syntax allows an expression of any degree of complexity. 

// ## The `for` loop syntax

// ```js
// for ([initializer]; [condition]; [increment]) {
//   // Your code here
// }
// ```

// ## The `for` loop process
// When a for loop executes, the following occurs:
// 1. The `initializer` expression executes and creates one or more loop counters. The syntax allows an expression of any degree of complexity but is usually `i = 0` or `i = 1`. 
// 2. The `condition` expression is evaluated. 
//     - If the value of `condition` is `true`, the loop statements within the code block executes. 
//     - If the value of `condition` is `false`, the `for` loop terminates.
// 3. The code block executes. Any counters or variables that were initialized are available within the code block.
// 4. The `increment` expression is executed. This usually increases the counter by 1 (`i++`).
// 5. Control returns to Step 2.
