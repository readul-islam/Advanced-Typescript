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

// interface , type vs interface

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
