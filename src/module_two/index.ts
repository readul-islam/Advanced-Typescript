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
const mentors:GenericArray<string> = ["ali","sagor"]

// const rollNumber:number[] = [1,2,3,4]
// const rollNumber1:Array<number> = [1,2,3,4]
const rollNumber1:GenericArray<number> = [1,2,3,4]

// const boolArray:boolean[] = [true, false]
// const boolArray1:Array<boolean> =  [true, false]
const boolArray1:GenericArray<boolean> =  [true, false]
