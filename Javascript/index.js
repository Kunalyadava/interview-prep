// variables are store location with assigned names it
//  holds data that we can use or change later
// A declaration allocates a memory and the assignment assigns a value to this
// (itialize the variable with a value),allocated memoery

//Nested > when there a conditional statement present inside conditional statement 
// Hoisting is JavaScript's default behavior of moving all declarations 
// to the top of the current scope 



// Hoisting
//it only applies to variables and functions

//It doesn't care about variable values. All it wants to know what 
//variables are present in a program.


// when js engine excutes a script it creates execution contexts, 
//each execution context has 2 phases 

// Javascript is executed in two phases
// 1. Memory Component (variable Component) Memory Creation Phase
// 2. Code Component (Thread of execution) Code Execution phase

//Hoisting simply gives higher specificity to JavaScript declarations.
//  Thus, it makes the computer read and process declarations first before
//   analyzing any other code in a program.

// - During the creation phase of the execution context,
//  JS allocates memory space for the functions and variables.
// - In case of functions, the whole function body is stored but 
// in case of the variables, it is declared and assigned a default
//  value `undefined`. This phenomena is called `Hoisting`


// - Execution phase:
//     - Since memory allocation is done, now it will go into execution phase .
//     - In this phase, JS executes our code line by line and assigns the
//      value to the variables.

// - Whatever we saw now is GEC (Global execution phase)
// - There is one more thing called as functional execution phase
// - Whenever a function gets invoked, a new execution context 
// gets created known as functional execution context.
// - It has two phases again
//     - creation and execution phase
// - Once function execution is done, functional execution context gets removed

// Javascript scans the file and gets the delcarations of functions, 
// variables and class and stores/ moves up to the top of their scope,
//  prior to the Code execution phase.

//global execution context is the default  context in which js code starts 
// its execution when the file first loads in the browser

//functional execution contet is defined as the context created by the
// js engine whenever it finds any function call
// Execution context (EC) is defined as the environment in which the JavaScript
//  code is executed. By environment, I mean what variables JavaScript code has
//   access to at a particular time.


// Execution Stack
// Execution stack, also known as “calling stack” in other programming languages, 
// is a stack with a LIFO (Last in, First out) structure, which is used to store
//  all the execution context created during the code execution.

// When the JavaScript engine first encounters your script, 
// it creates a global execution context and pushes it to the current execution stack.

// Whenever the engine finds a function invocation, it creates a new execution
//  context for that function and pushes it to the top of the stack.

// Variable Scope 
// Scope in JavaScript refers to the accessibility or visibility of variables.
//  That is, which parts of a program have access to the variable 
//  or where the variable is visible.
 
//  Global scope
// When you execute a script, the JavaScript engine creates a global 
// execution context. It also assigns variables that you declare outside
//  of functions to the global execution context.
//   These variables are in the global scope. They are also known as global variables.

// Local scope
// Variables that you declare inside a function are local to that function. 
// They are called Local Variables and can’t be accessed in Global Scope.

// Block scope
// Variables that you declare inside a block {} using let or const are
//  limited only to that block.



















// Data types

// Primitive Values 
// Boolean, BigInt, String, Symbol, Null ,Number,  Undefined type
// Immutable means that which cannot be changed or modified.
// When we create a string, the value is created from scratch as opposed to being replaced



// Non-zero value =   something is there 
// 0              =   quantity is Non-zero
// null           =    something exixts but its value is NA or wiped out 
// undefined      =    something doesn't exixt


// Mutability means to be able to change something example rubber
    
// Primitive Data Types in Js is Immutable value cannot be changed in memory

//     SSBBNNU                          they hold the value

//example how premitive data types are stored in memory  and it cannot be changed
<script>
  {/* var a="Kunal"
a[0]="a"
console.log(a)  //kunal
var admin=[1,2,3]
admin[0]="Kunal"
console.log(admin) //kunal,2,3 */}
</script>


//     Non-Primitive Data Types in Js  is mutable value can be changed in memory

//     Objects Arrys Functions            they hold the address


    
///////////////////////////////////////////////////////////////////
  // const teacher={name:"Kunal"}
  // teacher ={name:"Kumar"}  //Script snippet #1:2 Uncaught TypeError: Assignment to constant variable.

//note= if we are declaring a variable using const keyword 
//we cannot asign a new value to it
//but we can mutate mutate the values


//  let obj={name:"Kunal"}
//  const teacher=obj;
//  obj.name="John" //'John'
 //here we are not assigning anything to teacher we are just mutating the values



// const obj={name:"Kunal"}
// obj.name="John"
// console.log(obj) //john
//  we  cannot re assign value to obj we can only mutate

// const arr=[1,2,3,4]
// arr.push(2)
// console.log(arr)
// we can mutate but we cannnot re assign









// And Objects
// Object
// Sorting
// Write a program to merge to sorted arrays

// Splice
// Remove or add an element to the array based on the given range,the splice method changes the original array

// Slice
// Does not change the original array


// Pure components
// Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values.


// Force render a component


// Redux flow
// Action --> dispatcher --> store -> updates the state -> view is re-rendered

// Use effect


// Display block and inline


// [1:02 PM] Variable hoisting?
// Four es6 features
// Prototype chain?

// Each object has a private property which holds a link to another 
// object called its prototype.That prototype object has a prototype of its own,
//  and so on until an object is reached with null as its prototype. By definition,
//   null has no prototype, and acts as the final link in this prototype chain.


// Closures
// Given InputArr = [1, ‘a’, ‘b’, 5, 6], 
//Implement InputArr.square() So that it return OutputArr = [1, ‘a’, ‘b’, 25, 36]

// const sum = (a, b) => a + b
// sum(1, 2) // + operation
// sum(2, 3) // + operation
// sum(1, 2) // from cache
//    - Implement a caching fn
//    - Can change implementation of sum fn
//    - Do Not polluting the global space
// Implement a stopwatch in React JS
// [1:03 PM] Prototype chain
// Array flatten,
// var merged = [].concat.apply([], arrays);




// Closure, 
// A function that is bundled with it's lexical scope

// Currying, if there is n number of input how you will handle that.


// Primitive datatypes AND NON-Primitive datatypes
// Hoisting 
// Closures // A function that is bundled with it's lexical scope
//currying


//callback hell 
//Callback: A callback is a function that is passed as an argument to another 
// function that executes the callback based on the result. They are basically 
// functions that are executed only after a result is produced. Callbacks 
// are an important part of asynchronous JavaScript.

//Callback Hell: Callback Hell is essentially nested callbacks stacked below
//  one another forming a pyramid structure. Every callback depends/waits 
//  for the previous callback, thereby making a pyramid structure that
//   affects the readability and maintainability of the code. 

// What is Virtual DOM
// What is BABEL
// Reconcillation
// Mapping an array and sorting
// Gave him a code and ask him about how it is hoisting
// Merge two sorted arrays
// Redux flow
// Context API
// CSS Flex
// If they give three btns how will you flex it?.
// And where will you add the flex?.





// //how to remove arrow sign in input type =number

// {/* <input type="number" class="no-spinners" />

// .no-spinners::-webkit-inner-spin-button,
// .no-spinners::-webkit-outer-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// } */}




//Asynchronous Programming
//Javascript is synchronous, blocking, single-threaded language.

// synchronous means to be in a sequence, i.e. every statement of
//the code gets executed one by one. So, basically a statement 
//has to wait for the earlier statement to get executed

//const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)



//Essentials js 2

// let  obj={name:"Kunal"}
// let obj1= obj
// let obj2=obj1
// let obj3=obj2
// console.log(obj2)//Kunal
//  obj2.name="Kumar"
// console.log(obj2)//kumar
// console.log(obj)//kumar

// There are only six falsey values in JavaScript: 
// undefined , null , NaN , 0 , "" (empty string), and false. 
// Anything that is not falsey it truthy.
//" " it will be true because it is containing space and hence it is not empty


//When we use logical OR (||) , javascript looks for the first truthy value
// and returns it as soon as it finds it. If it does not find any truthy value,
// it returns the last falsy value it finds.

//*When we use logical AND (&&), Javascript either returns the first falsey
// value it finds, else if all the operands are truthy, it returns the last truthy value.*



//The nullish coalescing (??) operator is a logical operator that returns 
// its right-hand side operand when its left-hand side operand is null or
//  undefined, and otherwise returns its left-hand side operand.



// let greet=function(name){
//   return `Hello from ${name}!`
// }
// greet("vivek")


//////

// let greet=(name)=>(`Hello from ${name}!`)
// greet("vivek")

//////////////
// let greet=name=>`Hello from ${name}!`
// greet("vivek")
/////

// (name=>`Hello from ${name}!`)('vivek');




//To implicitly return an object ,surround it with parenthesis
// let greet=()=>({name:"Vivek"})
// greet()


// rest operator helps collect all the arguments in an array
// function doSomething(first, second, ...rest) {
//   console.log(first, second, rest); // rest is guarenteed to be an array
// }
// doSomething('one', 'two', 'three', 'four', 'five');



// The spread operator explodes array or objects in place




//function expressions can be anonymous and it supports 
//hoisting while function declations must have a name
//example
// function  sum(a,b){
//   return a+b
// }

//// function(a,b){
//   return a+b
// }


//while function declations must have a name and we must define/declare it before using
//let sum= function (a,b){
//   return a+b
// }


//Statements vs Expressions

////it is a piece of code that always produces something or
// An expression is anything that evaluates to a value. 
//Expressions are usually on the right-hand side of statements. 
//it is a piece of code that always produces something 


//statement : an instruction to perform a specific action or task
//conditional statement: it tells weather a peace of code will run or not 
//example if else or switch case


//Lexical environment //lexical scope means the place or environmwnt where the variable is sitting

function two(){
  var a;
  console.log(a);
}
function one(){
  var a=2;
  console.log(a);
  two();
}
var a=1;
console.log(a);
one(); //Output for the above code is 1 2 undefined 
//because we have not given
//  any value to variable a in function two and in
//  javascript default value assigned to a variable is undefined.

// whenever a context ececution is created along with it a lexical 
// enviroment is created and each lexical enviroment have referece to
//  its parent lexical enviroments which points to its memory allocation.

function two(){
  console.log(a);
}
function one(){
  var a=2;
  console.log(a);
  two();
}
var a=1;
console.log(a);
one(); //Output for the above code is 1 2 1
// When javascript asked for the value of var a in function two’s
//  execution context it couldn’t find it so it moved down and searched 
//  in its outer lexical environment i.e. global execution context.
//var a is not defined in function two so it searched in its lexical environment i.e. 
//global execution context.

//Every execution context has a reference to its outer environment, 
//and that outer environment is called Lexical Environment

function one(){
  function two(){
   console.log(a);
  }
  var a=2;
  console.log(a);
  two();
}
var a=1;
console.log(a);
one();
// Output for the above code is 1 2 2
// In the above example in the case of function two, its outer lexical
// environment is function one’s execution context and for function one,
// the outer lexical environment is the global execution context.

// When javascript asked for the value of var a in function two’s 
// execution context it couldn’t find it so it moved down and searched
//  it in its outer lexical environment i.e. function one in this case.




///Temporal Dead Zone

//Hoisting simply gives higher specificity to JavaScript declarations.
// Thus, it makes the computer read and process declarations first before
// analyzing any other code in a program.

// let a=100
// console.log(a)
// var b=200

//in var it is in the global space but in case of a let it is in script but y this happened
//memory was asigned to b in var declaration and these variable b was attacted to global memory
//in let and cost they are allocated memory(called hoisting) but they are
//stored in some different memory space (script) so they are not global now

//TDZ is the time since when the let variable was hoisted and till it is initialed 
//some value the between that
console.log(a)
let a=10
let b=100
//here a was assigned a seperate memory space and it was also assigned undefined
//but it is not initialized so this phase is known as tzc untill it goes to the code
//let a=10 here tdz ends and the value of a put inside the a
//so it is the phase while hoisting to get a value

//when you try to acces it .it will give reference error
//if we try to get any random variable it will give reff error and  x is not def


//we cannot re-declare with let or let a=10 ,var a =10 in same scope //syntax error

//const : we cannot re-declare or declare now and assign value later const meant to be 
//declare in same line or together it will give type eror


//to avoid TDZ is to put all initialization and declaration on the TOP of the scope



//block:{  // compound statement } //it is used to combine multiple js groups or statements
// what all variables and functions we can access inside the block is block scope

{
  var a=10
  let b=20
  const c=30
}
//Block
   b:undefined
   c:undefined
//global
    a:undefined
//here let and const are stored in a seperate memory space reserved for this block
//so we camnnot access outside block



//shadowing
var a=100
{
  var a=10
  let b=20;
  const c=30
console.log(a)
console.log(b)
console.log(c)
}
// 10 20 30
var a=100
{
  var a=10
  let b=20;
  const c=30
console.log(a)
console.log(b)
console.log(c)
}
console.log(a)
//10 20 30
   //Block
   b:undefined
   c:undefined
//global
   a:10
//here both a are referring to same memory space (global space)

// let b=100
// {
//   var a=10
//   let b=20;
//   const c=30
// console.log(a)
// console.log(b)
// console.log(c)
// }
// console.log(b)
// //10 20 30 100
//    //Block
//    b:undefined
//    c:undefined
//    //script
//    b:100
// //global
//    a:10

//here both a are referring to diff memory space (block space and reserved memory space space)
//it behaves in the same way in functions also




//Illegal shadowding
var z=20
{
  var z=30
}
//30 legal

let z=20
{
  var z=30
}
//illegal //syntax error 
function x(){
  var z=30
}
//it isfine because var is a functiopn scope and it is unside its limit



let z=20
{
  let z=30
}
//legal


//vice versa
var z=20
{
  let z=30
}
//legal

const z=20
{
  const z=30
}


///
const f=20;{
  const f=100;{
     const f=200
      }
     }
//block 
  //a:200
//block
  //a:100
//script
   //a:20
//here it is following lexical scope pattern
