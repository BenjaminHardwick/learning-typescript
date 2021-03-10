// Usage of literals allows us to scritcly define the possible value for the variable
/*

    literals can be used in unions as demonstrated below
*/

// creating literals
let stringLiteral: "str" = "str";
let numberLiteral: 10 = 10;
let booleanLiteral: true = true;


// unions


let someVariable: "yes" | "no" = "yes";

someVariable = "no";
someVariable = "yes";
//someVariable = "what?"; // no wont work!!! "yes" or "no"!! or any of the strings in the variable!! remember the usage of union! | = or...




console.log(someVariable);

// stringLiteral = "words"; // does not work
// numberLiteral = 1; // does not work
// booleanLiteral = false; // does not work


