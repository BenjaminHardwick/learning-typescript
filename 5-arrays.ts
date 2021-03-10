
/* 

This brings us to arrays, here we have a basic array of strings. 

This is denoted by the array name, followed by the type and [].
*/
const arr: string[] = ["str", "str"];

/*
Now for the cool stuff!

The ability to join and use many different met types. for example, it is possible to create a type for an array of strings and numbers with union types. Or create a type for an array of litersls. 

This makes endless possiblities which is really cool. 

*/

const arrayOfUnions: (string | number)[] = ["straws", 10, 500000, "chicken", "everton", 180, "wow", "so", "c00l", 3];
const arrayOfLiterals: ("strawberry")[] = ["strawberry", "strawberry", "strawberry"];

