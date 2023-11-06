/*  using curlebraise brackets for for JavaScript Variable Scope issue */

{
  /* 
TypeScript Basic Data Types
**** automatically typed are implicit typed and given typed are explicit data types
*/

  // string Data Types;
  let name: string = "MD Readul Islam";
  // number Data Types;
  let id: number = 101;
  // booleans Data Types;
  let isEmployee: boolean = false;
  // undefined Data Types;
  let x: undefined = undefined;
  // null Data Types;
  let y: null = null;

  // NON -Primitive Data Types
  // Array Data Types;

  // structural way define
  let students: Array<string> = ["a", "b", "c"];
  // another way define

  let ids: number[] = [1, 2, 3, 4];

  // ids.push(a) // wrong
  ids.push(4);

  // tuple --> array --> order -->type

  let student: [number, string];

  student = [1, "d"];
  student.push("s", 1);

  console.log(student);

  // Reference Type --> Object

  const user: {
    company:"Futurionic" // Type --> literal types
    firstName: string;
    middleName?: string;
    lastName: string;
  } = {
    company:"Futurionic", 
    firstName: "Readul",
    middleName: "Islam",
    lastName: "Akash",
  };



  // Function in Typescript
}
