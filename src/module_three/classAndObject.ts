// 3-1: Class and object

class Animal {
  //  name: string;
  //  age: number;

  /*  we can use public key before parameters ,Typescript behind the see initialize all property and assign it's value itself, example below */
  constructor(public name: string, public age: number) {
    // this.name = name;
    // this.age = age;
  }

  getDogAge() {
    console.log(`Dog age ${this.age}`);
  }
}

const dog = new Animal("Dog", 20);

dog.getDogAge();

// 3-2: Inheritance in OOP.

class Person {
  name: string;
  age: number;
  country: string;
  weight: number;
  height: number;

  constructor(
    name: string,
    age: number,
    country: string,
    weight: number,
    height: number
  ) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.weight = weight;
    this.height = height;
  }

  getBMI() {
    console.log(`Your BMI figure of ${this.weight / this.height}`);
  }
}

class Student extends Person {
  studyClass: string;
  constructor(
    name: string,
    age: number,
    country: string,
    weight: number,
    height: number,
    studyClass: string
  ) {
    super(name, age, country, height, weight);
    this.studyClass = studyClass;
  }


  getCity(name: string) {
    console.log(`Your city is ${name}`)
  }
}

let readul = new Student("readul", 32, "Bangladesh", 64, 6.4, "Nine");

console.log(readul.getBMI())
console.log(readul.getCity("Barishal"))

// 3-3: Type guard using typeof & in

// (typeof) and (key in object) using for type guard or type checking