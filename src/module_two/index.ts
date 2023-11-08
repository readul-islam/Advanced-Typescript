// Type Assertion / Type narrowing 2 -1

/* 
 Type assertion is similar to typecasting but it doesn’t reconstruct code. You can use type assertion to specify a value’s type and tell the compiler not to deduce it. When we want to change a variable from one type to another such as any to number etc, we use Type assertion. 

 {ami developer hisabay typescripter theke better type bujlay saytai type assertion}
*/

let num: any;

num = "String";
num = 12.5;

const something = (num as number).toString();
console.log(typeof something);

const kgToGm = (value: string | number) => {
  if (typeof value === "string") {
    return parseInt(value) * 1000;
  } else if (typeof value === "number") {
    return value * 1000;
  } else {
    return "some thing wrong";
  }
};

const result = kgToGm(100) as number;
const result1 = kgToGm("1000") as string;

type CustomError = {
  message: string;
};

try {
  // something happening
} catch (error) {
  console.log((error as CustomError).message);
}

// interface , type vs interface 2-2

// for all primitive dataTypes we will use Type alias (extend with intersection)

// For Object we can use type alias and interface (extend with extends key)

type User = {
  name: string;
  roll: number;
};

const user: User = {
  name: "Readul",
  roll: 10,
};

type UserWithRole = User & { role: string }; // intersection

const user2: UserWithRole = {
  name: "Readul",
  roll: 10,
  role: "Admin",
};

// interface
interface User1 {
  name: string;
  roll: number;
}

interface UserWithRole1 extends User1 {
  role: string;
}

const user3: UserWithRole1 = {
  name: "Readul",
  roll: 10,
  role: "Admin",
};

// interface with array

// with type alias
type Roll1 = number[];

const roll1: Roll1 = [1, 2, 3];

// with interface

interface Roll2 {
  [index: number]: number; // index signature
}
const roll2: Roll2 = [1, 2, 3];

// function with type and interface

type Add1 = (num1: number, num2: number) => number;

interface Add2 {
  (num1: number, num2: number): number;
}

const addTwoNum: Add2 = (num1, num2) => {
  return num1 + num2;
};

// Introduction to Generics Type 2-3

type GenericArray<T> = Array<T>;

// const mentor:string[] = ["ali","sagor" ]
// const mentors:Array<string> = ["ali","sagor"]
const mentors: GenericArray<string> = ["ali", "sagor"];

// const rollNumber:number[] = [1,2,3,4]
// const rollNumber1:Array<number> = [1,2,3,4]
const rollNumber1: GenericArray<number> = [1, 2, 3, 4];

// const boolArray:boolean[] = [true, false]
// const boolArray1:Array<boolean> =  [true, false]
const boolArray1: GenericArray<boolean> = [true, false];

type Employee = {
  name: string;
  roll: number;
  isMarried: boolean;
};

const employees: GenericArray<{
  name: string;
  roll: number;
  isMarried: boolean;
}> = [
  {
    name: "Radul",
    roll: 1,
    isMarried: false,
  },
];
// good practice
const employees1: GenericArray<Employee> = [
  {
    name: "Radul",
    roll: 1,
    isMarried: false,
  },
];
// Generic Tuple
type GenericTuple<x, y> = [x, y];

const human: GenericTuple<string, number> = ["Readul", 18];

// Generic with interface 2-4

interface Developer<T, x = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    publishYear: string;
  };
  smartWatch: T;
  bike?: x;
}

type SmartWatch = {
  name: string;
  price: number;
  model: string;
};

const poorDeveloper: Developer<SmartWatch> = {
  name: "Readul",
  computer: {
    brand: "Asus",
    model: "54x",
    publishYear: "2023",
  },
  smartWatch: {
    name: "Hwllo",
    price: 11000,
    model: "pro x",
  },
};

interface Bike {
  name: string;
  price: number;
  model: string;
}
const richDeveloper: Developer<SmartWatch, Bike> = {
  name: "Readul",
  computer: {
    brand: "Asus",
    model: "54x",
    publishYear: "2023",
  },
  smartWatch: {
    name: "Pro Apple Watch",
    price: 1100000,
    model: "pro x-13",
  },
  bike: {
    name: "Yahama",
    price: 10000000,
    model: "RTX 1000",
  },
};

// Function with Generics 2-5

const createArray = <T>(param: T): T[] => {
  return [param];
};

createArray<string>("string");
createArray<number>(10);
createArray<boolean>(true);

const createTuple = <T1, T2>(param1: T1, param2: T2): [T1, T2] => {
  return [param1, param2];
};

createTuple<string, number>("Akash", 100);

function addCourseName<T>(studentInfo: T): T & { courseName: string } {
  const courseName = "Level 2 development";

  return {
    ...studentInfo,
    courseName,
  };
}
interface studentInfo {
  name: string;
  id: number;
}
addCourseName<studentInfo>({
  name: "Readul Islam",
  id: 101,
});
addCourseName({
  name: "Readul Islam",
  id: 101,
  email:"readul@gmail.com"
});

// Constraints in typescript 2-6
// Constraints means that ensure that this data must be extends our constraints property and type


interface ConstraintData{ 
  name: string;
  id: number;
  email: string;
}


const course2 = <T extends ConstraintData>(studentInfo:T)=>{
  const courseName = "Level 2 development";

  return {
    ...studentInfo,
    courseName,
  };
}


course2({
  name: "Readul Islam",
  id: 101,
  email:"readul@gmail.com",
  level:"pro"
});


// Generic Constraint using key of 2-7
// keyof used for create a union type for another type property .. example below


type Vehicle1 ={
bike: string;
car: string;
ship: string;
}

interface Vehicle2{
  bike: string;
  car: string;
  ship: string;
}

// manually create union type
type Owner1 = "bike"| "car"| "ship"


// union create from another type property


type Owner2 = keyof Vehicle2;

const myVehicle:Owner2 ="bike"

/* 
y extends keyof x

that means y must be key of x
*/
const getPropertyValue = <x,y extends keyof x>(obj:x, key:y)=>{


  return obj[key];
}




const user5={
  name: "readul",
  age: 18,
  isStudent: true,
}
const user6={
  roll:111,
  trusted: true,
}

// getPropertyValue(user5, "sagor")
getPropertyValue(user5, "isStudent")
getPropertyValue(user6, "roll")


// Asynchronous typescript 2-8

