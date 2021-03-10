/*

Closely related to unions and while union types functionally act like the logical 'or'. The intersection
types function like logical and thus you can create the ampersand sign (&).

*/

const IntersectionVariable: { str: string } & { num: number } = {
    str: "str",
    num: 10
};


