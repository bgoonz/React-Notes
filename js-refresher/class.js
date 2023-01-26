class Human {
  constructor() {
    this.gender = "female";
  }
  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor() {
    super();
    this.name = "Bryan";
    this.gender = "male";
  }
  printMyName() {
    console.log(this.name);
  }
}
const person = new Person();
person.printMyName();
person.printGender();
//es 7 syntax
class Human1 {
     gender = "female";
    printGender=()=> {
      console.log(this.gender);
    }
  }
  class Person1 extends Human {
name = "Bryan";
gender = "male";
  
    printMyName=() =>{
      console.log(this.name);
    }
}
  const person1 = new Person1();
  person1.printMyName();
  person1.printGender();
