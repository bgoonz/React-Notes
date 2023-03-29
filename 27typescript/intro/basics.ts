//Primatives (number, string, boolean, null, undefined, symbol)
//References(Objects, Arrays, Functions)

// Primatives
let age: number;
age = 12;

let userName: string;
userName = "Bryan";

let isInstructor: boolean;
isInstructor = true;

// References
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Bryan",
  age: 27,
};

//People is an array of objects of the person type description
let people: {
  name: string;
  age: number;
}[];

//Type Alias
type Person = {
  name: string;
  age: number;
};
//this is an array of objects of the person type description
let People: Person[];

people = [
  {
    name: "Bryan",
    age: 27,
  },
];

//Type inference
let course = "React - The Complete Guide";
//course = 12345; //Error

//Union Types
let courseUnion: string | number = "React - The Complete Guide";
courseUnion = 12345;

//Union of a string or an array of strings
let courseUnion2: string | string[] = "React - The Complete Guide";
courseUnion2 = ["React - The Complete Guide", "Angular - The Complete Guide"];

//Functions & Types
function addNumbers(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

printOutput(add(5, 2));

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); // ['d', 'a', 'b', 'c']

//the problem with the above is that it is not type safe... the following would not throw an error
//Can't use split on a number
// console.log(updatedArray[0].split("")); // ['-', '1']

//This tells typescript that the type of the elements in the array and the value that should be added to it must be of the same type:
//array: T[], value: T
