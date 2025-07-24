
//console.log(Age);//RefernceError:Cannot Access 'Age' before Initlization 
// const Age=10;
// console.log(Age); undefined
// var Age=10
// console.log(Age);//RefernceError:Cannot Access 'Age' before Initlization 
// let Age=10;

// sayname(30);

// function sayname(fullname){
// console.log(fullname);
// }

//function expression wale case me ye kamm anhi akrta hai


// getname("Mukesh")
// let getname=function(fname)
// {
//     console.log(fname);
// }

// const human1=new human()////RefernceError:Cannot Access 'Human' before Initlization 
// class human{
   
// }


 //Function with expression And (function call one function call into another function)
// let greetA =function(){
// console.log("Have A Nice Day A")

// }
// //greetA();


// let greetB= function(){
//     console.log("Have A Nice Day B")
//    greetA()
// }

// greetB()




//Normal Function
//  function greetA (){
//      console.log("Have A Nice Day A")
//  }
 
//  function greet (){
//      console.log("Have A Nice Day B")
//      greetA()
    
// }

// greet()


// function solve(number){
//     return function(number){
//         return number*number ;
//     }

// }

// let ans=solve(5);

// let finalans=ans(10);
// console.log(finalans);


//Inside Array Function


// const array=[
//     function(a,b){
//         return a*b;
//     },
//     function (a,b){
//         return a+b;
//     },
//      function(a,b){
//         return a/b;
//     },

// ]

// let first=array[2];
// let ans=first(6,6);
// console.log(ans)



// let obj={
//     age:20,
//     hei:20,
//     wei:30,
//      fun:function greet(){
//         console.log("Haill");
//      }
// }

// console.log(obj);
// obj.fun();


