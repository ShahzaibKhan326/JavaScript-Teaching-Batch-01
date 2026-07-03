//  Data Types
// String 
// Number 
// BigInt 
// null
// undifined
// symbol
// object
// Booelean

// ------->


// console.log(typeof [])

// ----->

// let student1 = "hasnain"
// let student2 = "shahzaib"   // => many line work
// let student3 = "random"

// collection of students 
// group of students

// console.log(student1)
// console.log(student2)
// console.log(student3)

// ----->

// let students = ["shahzaib","hasnain","random"]  // convert in one line 
// let students = [ 0 , 1 , 2]  

// let property = value;

// let alphabets = ["a","b","c"]


// console.log(students[0])

// let mobiles = ["vivo","samsung","infinix"]

// console.log(mobiles[1])


// Why array is an object in javaScript?
// JavaScript implements arrays as specialized objects with numbered keys and built-in collection methods.
// javascript arary ko special object samajta hai 
// jis may values ko number keys kay zariahai access
// kar saktay hai or es kay built in collectin methods ki
//  waja say.

// const colors = ["red","green","blue"]
// console.log(colors[0])

// Array is global object .
// used to store an order collection of muiltiple values
// under a single varibale name. 

// property = (value) <=  single 
// property = ["value1","value2","Value3"] <=  collection of values
                //    0  ,    1    ,   2 => order   => tarteb
                //    2  ,    1    ,   0 => unorder => bagair tarteb

//    ----->
// Array  => object 
// collecttion of muiltiple valuse.
// order collection of muiltipke valuse
// In a single variable .    
// How to access it variable ?  
// colors   [  0  ]  
// property [index]   
// Index => position of value in array 
// --------->

// const number = [1 , 2 ,3]  
// console.log(number[1])

// ------>
// Object is standalone , non primitive data struture that 
// Stores data as a collection of key-value pair.

// ------->

// Object is a standalone,
// Non-Primitive data structure 
// That stores data as a collection of key-value pairs.

// let student  = {
//     name : "abc",
//     class: 3 ,
//     city : "karachi" ,
//     rollNumber : 1234,
//     //  key  : "value"
// }

// ---Syntex-->

// let  property = {
    //   key : value ,
    //   key : value ,
    //   key : value ,
    //   key : value   
// }

// ----->

// property = (value) => value ki type 
    // string => "value"
    // Number => 234
    // array  => []
    // object => {}
    // boolean => true / false

// const person = {
//     // key : value
//     name : "shahzaib",
//     age : 999,
//     greeting : "hello"

// }
// --Access object values--->
// property.key
// console.log(person.name)

// object / array => 
// always use const

// const friends = ["name1","name2","name3"]
// index =>        0  ,    1  ,    2
// const friends = ["name3","name1","name2"]


//------->

// Quick Comparison >
// Array =>
// Ordered list / sequence
// Numeric indices (0, 1, 2...)


// object =>
// Unordered key-value pairs
// String or Symbol keys




// --Array----->
// Storing collections of similar items
// const colors = ["red","blue","green"]

// // Describing a single entity's features
// const student = {
//     name : "shahzaib",
//     age  : 75
// }

// ------>


// Array =>
// Array is global object.
// Stored collection of values of similar items.
// collection of values are ordered
// How to access its value =>
// property[index]
// numbers[1]

// const numbers = [1 ,2 , 3]
// console.log(numbers[1])


// Object =>
// object stores data as a collection of key-value pair.
// Where the keys are strings(or symbols)
// and the values can be any data types 
// object are unorder

// let person = {
//       // key    : value
//     // string : any data type
//         name  : "string",
//         age   :  12
// }

// console.log(person.name)


// -------->

// let input = document.getElementById("input")
// let result = document.getElementById("result")

// function showNote()
// {
//    let note = input.value ;
//    result.innerText += note;
// }


// --------->

//  A data type tells javascript what kind of value a 
// variable holds.


// JavaScript Data types =>
// javascript has 8 data types 

// Primitive 7
// string 
// number 
// null 
// undifined
// Boolean
// symbol
// Biginit

// Non-Primitive 1
// object

// Everything that is not primitive is an object.


// object ki elawa koi b data type is called primitive data type



// object 
// Array 
// Function 
// Dates 
// Maps 
// sets
// Regular Expression

// let name = "king" // Primitive
// let number = 123  // Primitive

// let persone = {
//     name : "ali"    
// }                  // non-primitive

// let color = ["gree","red","blue"]  // non-primitve

// console.log(typeof color)


// What does primitive means ?
// The word primitive means =>
// Basic , simple  , or fundamental

// Primitive values are the simplest valuse javascript can store.

// let age = 20 ;
// The variable stores only one value.


// ---Points---->
// Every data type instead of object is called non-primitive data type.

// Primitive means => basic , simple , or fundamental

// let name = "ali";
// The variable stores only one value:

// Non-Primitive =>
// Not basic or more complex
// Instead of storing just one value ,
// they can store many values and behaviour together.

// let name =  "ali" 
// //  propery =  value  
// // simple ,  store one value

// let person = {
//     name : "ali",
//     age :12 ,
// }
// complex , store muiltiple values

//  property = {
//     key :value ,
//     key : value ,
//  }


// --------->

// Immutable means =>
// once a primitive value is created , that value itself connot be modified.

let name = "ali"
name = "ahmed"

// ali changed into ahmed 
// that is not what happened

// name =>  "ali"
// name = "Ahmed"
// name = "Ahmed"

// The original string "Ali" still exists until JavaScript's garbage collector removes it if nothing references it.
// JavaScript did not modify "Ali"; it assigned a new string to the variable.


let a = 10 ;
let b = a ;  // 10

// a => 10 
// b => 10

b = 50 ;

// a => 10 
// b => 50

// Changing b does not affect a because each variable has its own copy of the value.

// Compare by value =>
// let a = 10 ;
// let b = 10 ;
// console.log(a === b)
// Because javascript compare the value .

// ---Non Primitive------>

// let student = {
//     name: "Ali",
//     age: 20,
//     city: "Karachi"
// };

// One variable stores many pieces of information.

// ----->

// let student = {
//     name : "ali"
// }

// student.name = "Ahmed"
// // // console.log(property.key)
// console.log(student.name)

// console.log(student)

// The object itself changed



// Copied by Reference 


// let student1 = {
//     name: "Ali"
// };

// let student2 = student1;

// console.log(student1.name)
// console.log(student2.name)

// // let student2  = {
// //     name: "Ali"
// // };

// student2.name = "shahzaib"

// console.log(student1.name)


// Primitive     =>  store by value
// Non-Primitive => store by reference

// Reference =>  Address

// --Primitive--->

// let a = 10 ;
// let b = a ;  // 10 
// b = 50 ;

// a => 10 ;
// b => 50;

// --Non-Primitive--->

// let student1 = {
//     name: "Ali"
// };

// let student2 = student1;

// std1 = std2 
// std1.name ;


// ---Primitive-->

// Compare by value =>
let a = 10 ;
let b = 10 ;
console.log(a === b) // true
// Because javascript compare the value .


// --Non primitive----->

let student1 = {
    name: "Ali"
};

// let student2 = student1;

//       \
//        \
//         ----> Object
//              {
//                 name:"Ali"
//              }
//        /
// student2

// Both variables point to the same object in memory.

// Now

// ---Non Primitive---->

// Compared by Reference

// let obj1 = {
//     name : "ali"
// }

// let obj2 = {
//     name : "ali"
// }

// console.log(obj1 === obj2)  // False

// // Even though the contents look identical, they are two different objects in memory.

// let obj1 = {
//     name: "Ali"
// };

// let obj2 = obj1;

// console.log(obj1 === obj2); // true


// ---Primitive------>
// simple , store one value
// Immutable => 
// once a primitive value is created , that value itself connot be modified.
// compare by value;



// ---Non-Primitive--->
// complex , store many values
// Mutable =>  can change by it self.
// compare by reference


// | Feature             | Primitive                                                | Non-Primitive                           |
// | ------------------- | -------------------------------------------------------- | --------------------------------------- |
// | Number of Types     | 7                                                        | 1 (Object)                              |
// | Stores              | Single value                                             | Multiple values                         |
// | Mutable             | ❌ No (immutable values)                                  | ✅ Yes                                   |
// | Copy                | By value                                                 | By reference                            |
// | Comparison          | By value                                                 | By reference                            |
// | Can have properties | ❌ No                                                     | ✅ Yes                                   |
// | Memory              | Independent values                                       | Shared object references                |
// | Examples            | String, Number, Boolean, Undefined, Null, BigInt, Symbol | Object, Array, Function, Date, Map, Set |


// Easy Way to Remember

// Imagine you're writing on paper.

// Primitive = Photocopy 📄

// If you photocopy a document:

// You have two separate copies.
// Writing on one copy does not change the other.
// let a = 10;
// let b = a;

// a and b are like two separate photocopies.


// Non-Primitive = Shared Whiteboard 📝

// Imagine two people looking at the same whiteboard.

// If one person writes:

// Hello

// The other person immediately sees:

// Hello

// They are sharing the same board.

// let obj1 = { name: "Ali" };
// let obj2 = obj1;

// obj2.name = "Ahmed";

// Both variables refer to the same object, so a change through one is visible through the other.

// -------->

// --Primitive--->
// store one value,
// simple to define,
// Immutable
// compare by value;
// copy of seperate values

//---Non-Primitive---->
// store many values
// complex to define
// mutable 
// compare by reference(address)
// both values refer to same object.

// std = {
//     name : "ali"
// }

// std2 = std =>   {name :ali}

// std2.name = "someone"

// std = {name : "someone"}
// std2 = {name : "someone"}