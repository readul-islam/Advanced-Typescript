// 3-1: Class and object

class Animal{
 name: string;
 age: number;

 constructor(name: string, age: number){
    this.name = name;
    this.age = age;
 }
 
}

const dog = new Animal("Dog", 20);