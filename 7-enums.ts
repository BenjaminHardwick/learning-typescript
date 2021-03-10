
// Enums, allows access to both the member and the numeric value. Easier to be programmed than explained... Look below.

enum Animals { Cat, Dog, Frog };

Animals.Cat // gives us 0
Animals.Dog // gives us 1
Animals.Frog // gives us 2

Animals[2] // gives Frog
Animals[0] // Cat

// Enums are good for standard values. but since this is TS we are all about types lessss do this...

let AnimalEnumVariables: Animals = Animals.Cat;
AnimalEnumVariables = 1;

//AnimalEnumVariables = Animals[2] // throws an error.

// You can actually change the number that is assigned to the enum for example: 

enum City { Liverpool, London = 50, Glasgow };

City.Liverpool // 0
City.London // 50
City.Glasgow // 51

// basically we just make it so now it's number of reference is now 50 and it will iterate the remainder of the enum from there.


