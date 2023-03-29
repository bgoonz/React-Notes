//Primatives (number, string, boolean, null, undefined, symbol)
//References(Objects, Arrays, Functions)

// Primatives
let age: number;
age = 12;


let userName: string;
userName = 'Bryan';

let isInstructor: boolean;
isInstructor = true;

// References
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Bryan',
    age: 27
};


//People is an array of objects of the person type description
let people: {
    name: string;
    age: number;
}[];

people = [
    {
        name: 'Bryan',
        age: 27
    }
];

//Type inference
let course = 'React - The Complete Guide';
//course = 12345; //Error

//Union Types
let courseUnion: string | number = 'React - The Complete Guide';
courseUnion = 12345;



//Functions & Types
function add(a: number, b: number): number {
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

