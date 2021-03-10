/* 
 TypeScript: Compiled, open source, and made by Microsoft. Used for modern ES-Next features and static type systems.

TYPES
all types are subtypes of a single top type called ANY type... 

primitive types:
    number
    bool
    string
    null
    undefined

    compile to JS
    tsc {filename}.ts

*/

// The Basics

const myString: string = "words can go here";
const myInt: number = 1234;
const myBoolean: boolean = true; // can be false
const myObject: object = {};
//const myOtherObject: object = "str"; // will throw err;

let myAnyItem: any = "str"; // try avoid using Any as it can omit type checking...
myAnyItem = 23;
myAnyItem = true;
// bad lol

// void types
// This will tell the compiler to not expect anything to be returned, typically used in functions (similarly what java does)
let myVoidVar: void = undefined;
myVoidVar = null;

// object types contain:
    // class, module, interface and literal types which support typed arrays

// skip functions and classes and come back to after literals(3)-enums(7) if you're a new programmer or new to javascript/typescript
