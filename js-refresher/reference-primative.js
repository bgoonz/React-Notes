const number = 1;
const num2 = number;//copy of number
console.log( num2 );//1

const person = {
    name:'Bryan'
}
const secondPerson = person;
console.log( secondPerson );//{ name: 'Bryan' } not an actual copy of person... secondPerson is a pointer to the original object pointed to by the person variable.



// To actually copy an object use the spread operator
const personCopy = {
    ...person
}

person.name = 'nick'
console.log( secondPerson );//{ name: 'nick' } changing the name property on the original object also changed the second person object
console.log(personCopy)



