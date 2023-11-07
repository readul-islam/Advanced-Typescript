"use strict";
// Type Assertion / Type narrowing 2 -1
/*
 Type assertion is similar to typecasting but it doesn’t reconstruct code. You can use type assertion to specify a value’s type and tell the compiler not to deduce it. When we want to change a variable from one type to another such as any to number etc, we use Type assertion.

 {ami developer hisabay typescripter theke better type bujlay saytai type assertion}
*/
let num;
num = "String";
num = 12.5;
const something = num.toString();
console.log(typeof something);
const kgToGm = (value) => {
    if (typeof value === "string") {
        return parseInt(value) * 1000;
    }
    else if (typeof value === "number") {
        return value * 1000;
    }
    else {
        return "some thing wrong";
    }
};
const result = kgToGm(100);
const result1 = kgToGm("1000");
try {
    // something happening
}
catch (error) {
    console.log(error.message);
}
const user = {
    name: "Readul",
    roll: 10,
};
const user2 = {
    name: "Readul",
    roll: 10,
    role: "Admin",
};
const user3 = {
    name: "Readul",
    roll: 10,
    role: "Admin",
};
const roll1 = [1, 2, 3];
const roll2 = [1, 2, 3];
const addTwoNum = (num1, num2) => {
    return num1 + num2;
};
// const mentor:string[] = ["ali","sagor" ]
// const mentors:Array<string> = ["ali","sagor"]
const mentors = ["ali", "sagor"];
// const rollNumber:number[] = [1,2,3,4]
// const rollNumber1:Array<number> = [1,2,3,4]
const rollNumber1 = [1, 2, 3, 4];
// const boolArray:boolean[] = [true, false]
// const boolArray1:Array<boolean> =  [true, false]
const boolArray1 = [true, false];
