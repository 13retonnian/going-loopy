# Example: Print 1-to-100 with a `for` Loop
## Terminology
Initializer
: This expression usually creates one or more loop counters, but the syntax allows an expression of any degree of complexity.

Condition
: If the value of condition expression is true, the loop iteration executes. If the value of condition is false, the loop terminates.

Increment
: The loop counter increments. This expression is usually `i++` but the syntax allows an expression of any degree of complexity. 

## The `for` loop syntax

```js
for ([initializer]; [condition]; [increment]) {
  // Your code here
}
```

## The `for` loop process
When a for loop executes, the following occurs:
1. The `initializer` expression executes and creates one or more loop counters. The syntax allows an expression of any degree of complexity but is usually `i = 0` or `i = 1`. 
2. The `condition` expression is evaluated. 
    - If the value of `condition` is `true`, the loop statements within the code block executes. 
    - If the value of `condition` is `false`, the `for` loop terminates.
3. The code block executes. Any counters or variables that were initialized are available within the code block.
4. The `increment` expression is executed. This usually increases the counter by 1 (`i++`).
5. Control returns to Step 2.
