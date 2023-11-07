"use strict";
/*  using curlebraise brackets for for JavaScript Variable Scope issue */
var _a;
{
    /*
  TypeScript Basic Data Types
  **** automatically typed are implicit typed and given typed are explicit data types
  */
    // string Data Types;
    let name = "MD Readul Islam";
    // number Data Types;
    let id = 101;
    // booleans Data Types;
    let isEmployee = false;
    // undefined Data Types;
    let x = undefined;
    // null Data Types;
    let y = null;
    // NON -Primitive Data Types
    // Array Data Types;
    // structural way define
    let students = ["a", "b", "c"];
    // another way define
    let ids = [1, 2, 3, 4];
    // ids.push(a) // wrong
    ids.push(4);
    // tuple --> array --> order -->type
    let student;
    student = [1, "d"];
    student.push("s", 1);
    console.log(student);
    // Reference Type --> Object 1.5
    const user = {
        company: "Futurionic",
        firstName: "Readul",
        middleName: "Islam",
        lastName: "Akash",
    };
    // Function in Typescript 1.6
    // Normal function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(1, 2);
    // Arrow Function
    const multiplication = (n1, n2) => {
        return `multiplication ${n1} and ${n2} = ${n1 * n2}`;
    };
    multiplication(10, 20);
    // function in  object or method
    const account = {
        name: "Readul Islam",
        balance: 0,
        addBalance(balance) {
            return `Your Current Balance is ${this.balance + balance}`;
        },
    };
    // array mapping
    const arr = [1, 2, 3];
    const newArray = arr.map((element) => element * element);
    // spread and Rest Operator  1-7
    //spread
    const class1 = ["a", "b", "b"];
    const class2 = ["d", "e", "f"];
    class1.push(...class2);
    const mentors = {
        name: "Abbas",
        id: 2,
    };
    const student2 = {
        name: "Sagor",
        id: 4,
    };
    const class9 = Object.assign(Object.assign({}, mentors), student2);
    // rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => {
            console.log(`Hi , I am ${friend}`);
        });
    };
    greetFriends("nahid", "akash", "sagor");
    // destructuring in typescript 1-8
    // in destructuring we can't declare type
    // alias means rename our variable name
    const contactInfo = {
        id: 407,
        name: {
            firstName: "Readul",
            middleName: "Islam",
            lastName: "Akash",
        },
        contact: "+8801758111",
        address: "Dhaka, Bangladesh",
    };
    const { contact: number } = contactInfo;
    console.log(number); // number is alias for contact
    // array Destructuring
    const myFriends = ["sagor", "mahamud", "nul", "s", "d"];
    const [, , bestFriend, ...rest] = myFriends;
    const readul = {
        name: "Readul",
        roll: 101,
        contact: "+88055454154",
        isMarried: "Unmarried",
    };
    const updateInfo = "PATCH";
    const fullStackDeveloper = {
        skill: ["REACT", "TAILWIND", "REDUX", "EXPRESS", "NODE", "MONGODb"],
        designation1: "d",
        designation2: "k",
    };
    // Ternary, Optional Chaining, nullish coalescing operator
    const a = 20;
    const result = a > 18 ? "adult" : "not adult";
    console.log(result);
    // nullish coalescing operator
    // null / undefined ==> decision making
    const auth = null;
    const res = auth !== null && auth !== void 0 ? auth : "Guest";
    console.log(res);
    const myAddress = {
        id: 101,
        addressOne: "Rungpur",
        addressTwo: "Barisal",
    };
    const parment = (_a = myAddress === null || myAddress === void 0 ? void 0 : myAddress.addressOne) !== null && _a !== void 0 ? _a : "Not Found";
    console.log(parment);
    // nullable Type , unknown Type / never Type
    /*
    
     // we don't know what type are you giving but we can take step runtime
    */
    const speedConvert = (value) => {
        if (typeof value === "string") {
            // take steps
        }
        else if (typeof value === "number") {
            // take steps
        }
        else {
            console.log("wrong Input");
        }
    };
    // never type
    /* if you sure that this function won't give you any type of value use never type explicitly */
    const throwError = (message) => {
        throw new Error(message);
    };
    throwError('something wrong');
}
