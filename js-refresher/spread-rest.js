//Spread operator is used to split up array elements or object properties
//Rest operator is used to merge a list of function arguments into an array.

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6];

console.log(newNumbers);



const filter = ( ...args ) => {
    return args.filter (el => el ===1);
}
console.log(filter(1,2,3,4))
