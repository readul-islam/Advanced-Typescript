"use strict";
/*  using curlebraise brackets for for JavaScript Variable Scope issue */
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
}
