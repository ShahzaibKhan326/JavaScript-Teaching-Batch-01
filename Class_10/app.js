// Data types = 8 

// ------>

// primitive = 7
// non-primitive = 1 

// --------->

// primitive => 
// store one value        1 = point 
// Example => a = 10 ;

// simple to define        2 = point
// Example =>  a = 10 ;

// Immutable (unchanged)   3 = point
// Example
// let a = 10 ;
// let b = a  ;
// b = 50 ;
// console.log(a , b)

// copy by value         4 = point 
// let a = 10 ;
// let b = a ;
// copy only value

// compare by value    5 = point 
// Example =>
// let a = 10 ;
// let b = 10 ;
// console.log(a === b)

// Example => 


// --non-Primitive---->

// Store many value.
// complex to define
// mutable (can be changed)
// Copy by reference (address)
// Compare by reference (address)

// Examples => 

// Store many value.
// Example => 

// let color = ["c1","c2",c3]

// let obj = { 
//   name : "ali";
//   age  :  12 ;
// }

// complex to define 
// Example => 
// let color = ["c1","c2",c3]

// let obj = { 
//   name : "ali";
//   age  :  12 ;
// }



// mutable (can be changed)

// let obj1 = {
//     name : "ali"
// }

// let obj2 = obj1;
// // console.log(obj2.name)
// obj2.name = "king"
// console.log(obj1.name)

// Copy by reference (address)

// let obj1 = {
//     name : "ali"
// }

// let obj2 = obj1; 

// Compare by reference (address)


// let shahzaib =    // address = 1
// {
//     class : "javascript"
// }
 
// let hussain =   // address  = 2
// {
//     class : "javascript"
// }

// let hamza =   // address  = 3
// {
//     class : "javascript"
// }


// console.log(hussain == hamza)

// // -------->

// let hasnain = {    // 4 
//      class : "javascript"
// }

// let hammad = hasnain   // 4
// // hammad => address = 4
// // hasnain =>  address = 4 
// console.log(hammad ==  hasnain)



// Type coersion =>

// changing karna ,  kisa data type 

// coversion type 
// implicit type conversoin
// explicit type conversion

// console.log("5" + 2) // => 52
// // string + number =  string

// String ko jorna
// number ko plus karana

// console.log("Hello" + "world")

// console.log("5" - 2)  // => 3
//          (5 - 2)
// sirf number  minus karna

// - only work with numbers , so javascript convert "5" into 5

// type coversion in js 



// --------->

// function is reusable block of code .
// design to perform a specific test


// Syntex 

// function property()
// {
   
// }


// function showResult()
// {
//   console.log("hello world") // block of code run
// }

// showResult()

// let u1_fn = "hasnain"
// let u1_ln = "khan"

// console.log(u1_fn + " " + u1_ln) 

// let u2_fn = "shahzaib"
// let u2_ln = "khan"

// console.log(u2_fn+ " " + u2_ln)

// let u3_fn = "ali"
// let u3_ln = "khan"

// console.log(u3_fn+ " " + u3_ln)

// ----->

// function joinNames(u1_fn,u1_ln) 
// {
// console.log(u1_fn + " " + u1_ln) 
// }


// joinNames("shahzaib","khan")
// joinNames("khan","lan")
// joinNames("ali","khan")


// ------>

// let u1 = "shahzaib"
// console.log("hello " + u1)
// let u2 = "hasnain"
// console.log("hello " + u2)
// let u3 = "hamza"
// console.log("hello " + u3)

// ------->

// function greet(name)
// {
//     console.log("Hello " ,name)
// }

// greet("shahzaib")
// greet("hamza")
// greet("hasnain")
// greet("ali")

// ------->

// function add(num1 , num2)
// {
//    console.log(num1 + num2)
// }

// // what you want to do ?
// // I want add 2 numbers.

// add(2,4)
// add(10,4)
// add(22,4)

// ------>

// function showMessage(time) // dynamic value
// {
//     console.log("good " + time)
// }

// showMessage("morning")
// showMessage("evening")
// showMessage("night")

// function is a block  of code.
{
    // code ... 
}

// which  is resuable .

// used for  one specfic task
// sayHello ,  showMessage , greetUser


// ----Operators------>
// +  -  / * %

// Working Of Plus sign (+)

// let firstName = "shahzaib"
// let lastName = "khan"

// console.log(firstName)
// console.log(lastName)

// console.log(firstName + lastName) 
// //  => join to strings 

// let num = 3;
// let num2 = 4;
// console.log(num+num2)  // => addition



// ------->

// String Concatenation:
// String Concatenation: If either side of the + sign is a string, 
// JavaScript converts the other side into a string and glues them together.


// Mathematical Addition: If both sides are numeric types (and neither is a string), 
// it performs standard arithmetic.


// ------->
// string ko join karta hai.
// number ko add kerta  hai .


// console.log("hello"+"world")
// console.log(3+5)

// ------>

// console.log("hello"+12)
// console.log(12+"hello")

// console.log("12"+2)

//          leftSide    +  RightSide
//          "string"    +     90 // <= (convert to string)


// console.log(12+"2")  // <= String Concatenation:


// --------->

// console.log(12+4)  // <= Mathematical Addition

// ---------->

// console.log(12+2)  // Addition
// console.log(12-2)  // subtraction
// console.log(12*2)  // muiltiplication
// console.log(12/2)  // divide


// ---Modules------>  
// %
// Remainder 


// console.log(6/2)

console.log(10%3)
