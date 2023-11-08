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
const employees = [
    {
        name: "Radul",
        roll: 1,
        isMarried: false,
    },
];
// good practice
const employees1 = [
    {
        name: "Radul",
        roll: 1,
        isMarried: false,
    },
];
const human = ["Readul", 18];
const poorDeveloper = {
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
const richDeveloper = {
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
const createArray = (param) => {
    return [param];
};
createArray("string");
createArray(10);
createArray(true);
const createTuple = (param1, param2) => {
    return [param1, param2];
};
createTuple("Akash", 100);
function addCourseName(studentInfo) {
    const courseName = "Level 2 development";
    return Object.assign(Object.assign({}, studentInfo), { courseName });
}
addCourseName({
    name: "Readul Islam",
    id: 101,
});
addCourseName({
    name: "Readul Islam",
    id: 101,
    email: "readul@gmail.com"
});
const course2 = (studentInfo) => {
    const courseName = "Level 2 development";
    return Object.assign(Object.assign({}, studentInfo), { courseName });
};
course2({
    name: "Readul Islam",
    id: 101,
    email: "readul@gmail.com",
    level: "pro"
});
const myVehicle = "bike";
/*
y extends keyof x

that means y must be key of x
*/
const getPropertyValue = (obj, key) => {
    return obj[key];
};
const user5 = {
    name: "readul",
    age: 18,
    isStudent: true,
};
const user6 = {
    roll: 111,
    trusted: true,
};
// getPropertyValue(user5, "sagor")
getPropertyValue(user5, "isStudent");
getPropertyValue(user6, "roll");
// Asynchronous typescript 2-8
