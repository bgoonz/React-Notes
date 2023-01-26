function multiplyByFive( multiplier ) {
    return multiplier * 5;
}
console.log( multiplyByFive( 5 ) );//25


const multiplyByFiveArrow = (multiplier) => {
    return multiplier * 5;
}
console.log( multiplyByFiveArrow( 5 ) );//25


/*
Arrow function expressions
Arrow functions solve many of the problems associated with the 'this' keyword...

The this keyword in an arrow function will always retain it's initial context

An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions.

*/
