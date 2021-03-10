// Typecasting, aka type assertation is veryyyy powerful. This is used in practically all statically typed languages.

// Very useful when you know more about the type of variable you're going to be using, even so more than when the compiler knows. 
// Dynamically typed langauges like JS allow you to change the type of your varaible without restrictions, by simply using brute force.

// In TS there are 2 different syntaxes

const anyVariable: any = "string";
// Precede the variable you cast by using the <> with the type you want inside. 
const StringVariable: string = <string>anyVariable;
// or using (as) keyword folloed by the target type as demonstrated below.
const SecondStringVariable: string = anyVariable as string;