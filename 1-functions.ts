/* functions are probably the most important think in typescript and in programming they make code better lol...
    Functions are basically what make anything functional and keep your program in order with both structure and organisation.
    we can call functions to do work for us.
 */

// regular functions  
function doFunctionalStuff(someString: string, someInteger: number): void {
    
    // do stuff no return required since we told the compiler to return value type void

}
// takes in two parameters both must be numbers as stated by the function
function add(a: number, b: number) {
    return a + b;
}
add(1, 2); // calling function to work perhaps you might want to create a new function and then call this function in the other function when you need to add a + b

// Arrow functions (most commonly used functions in js)

const expressionFunction: (arg: string, arg2: number) => void = (arg, arg2) => {
    // do code
}

(arg: string, arg2: number) => void {
    
}
// supplying a variable with a function expression which the arguments aren't typed. That is because that is previously done with the function type and it is not required to repeat.


// function type, like most other types, we  can also use the arguments type for another function.

function someFunction(funcArg: () => void): void {
  //do magic code here   
}

// The arguments here takes a function, which does not take any arguments. This also does not return anything. Furthermore, it is important to remember that these can be
// blended into other TS types.

// Optional types in the argument.

function anotherNewFunction(myArg: number, optionalArgument?: string): void {
    // code here pls
}
// using the ? operator we can tell teh function that this type is not required!! How cool!


// To ensure that there is solidarity within the program, we must list all required parameters first.

function theLastFunctionInHere(someArgument: number, anotherArgument?: string | undefined, lastArgument?: number | undefined): void {
    // hackerman code
}