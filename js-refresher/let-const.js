/*
let and const are ways of declaring a variable

let is the new version of var (creates a variable that is variable)

const is short for constant - use for variables you will only assign once.
*/
var myName = 'Bryan';
console.log( myName );


myName = 'Nick';
console.log( myName );


// changing var to let does not change this example

let myName = 'Bryan';
console.log( myName );


myName = 'Nick';
console.log( myName );


//changing this to const will cause a type error because you reasigned a constant


const myNameConst = 'Bryan';
console.log( myName );


myNameConst = 'Nick';
console.log( myName );


/*
/workspace/React-Complete-Guide-Course/js-refresher/let-const.js:18
let myName = 'Bryan';
    ^

SyntaxError: Identifier 'myName' has already been declared
    at Object.compileFunction (node:vm:360:18)
    at wrapSafe (node:internal/modules/cjs/loader:1094:15)
    at Module._compile (node:internal/modules/cjs/loader:1129:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1219:10)
    at Module.load (node:internal/modules/cjs/loader:1043:32)
    at Function.Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:22:47
*/



