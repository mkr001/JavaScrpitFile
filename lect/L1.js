// Let Const VAr

//var
// The var keyword was the traditional way of declaring variables in JavaScript. 
// Variables declared with var are function-scoped or globally-scoped, but not block-scoped.
//  This means that variables declared with var are hoisted to the top of their function or global scope.
//  This hoisting behavior can sometimes lead to unexpected results and make debugging challenging.


//var x=10We can Not Re-Decleration 
//Var X=20
//x=20 Reassigment Possible
//Var x="Mukesh" Redefination Possible

//var has some quirks and drawbacks, especially related to variable hoisting and its lack of block scope.
//  Due to these issues, let and const were introduced in ES6 (ECMAScript 2015) to provide better variable scoping mechanisms. 
// It's generally recommended to use let and const instead of var in modern JavaScript code,
//  unless there's a specific reason to use var.
// function Exp(a){
//     var x=10;//it is only Accsess In Function Scope And Only Access In Global Scope 
//     console.log(x)
//     return a;
    
// }

// let ans=Exp(2);
// console.log(ans);


// var x=10;//Here It Is In Globale Space So we Can Easly Access Any Where In this File

// i=0
// if (i=>x){
//     console.log(x)
// }

//let
// In JavaScript, the let keyword is used to declare variables that are block-scoped,
//  meaning they are only accessible within the block in which they are defined.
//  Block scope refers to any code block delimited by curly braces 
//  {} such as loops, conditionals, or function bodies


//  let a=20;
//  console.log (a)we can Easly Access


// {
//     let a=30;
//     console.log(a) we can Easly Access
// }
//console.log(a)we can not Access AnyWhere . Only we can Access In Block Scope 

// let a=10;
// let a=20; we can not Redeclaration 
// a=30; Manuplate  Allow 

// let x = 10;
// if (true) {
//     let y = 20;
//     console.log(x); // Output: 10
//     console.log(y); // Output: 20
// }
// console.log(x); // Output: 10
// console.log(y); Throws ReferenceError: y is not defined


// const a=20;
// console.log(a)
// a=30;  Again Assigen Not Error TypeError: Assignment to constant variable
//const a=30; Again Decleration Not Allow 