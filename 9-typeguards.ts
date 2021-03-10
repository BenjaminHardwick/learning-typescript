// Reintroducing unions within functions.

/*

    looking at the code below we can see that if we call the function with our union we will be thrown an error.

    Since we are not checking whether or not what we are passing is a number or a string. WE must ensure that we are passing the correct argument through into the function

    therefore validating our type is necessary. This is known as type guarding! :)

*/


const someUnion: string | number = 10;

function myFunction(argument: number) {
    // hackerman stuff
}

myFunction(someUnion); // throws an error

if (typeof someUnion === "string") {
    myFunction(someUnion);
}


// You can easily define your own type guard by checking the value has a certain property, or is equal to something else. 