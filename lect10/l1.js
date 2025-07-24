// //compile time error: SyntaxError: Unexpected token, expected "," (42:5)
// // let src={  this compile time errror

// //run time error: TypeError: Cannot read properties of undefined (reading 'key') at Object.<anonymous> (lect9/l1.js:52:5)

// //console.log(x); // This will throw a ReferenceError because 'x' is not defined
// //let x = 10; // Declare 'x' after using it


// try{
//     console.log("Try block started");
//     console.log(x);
//     console.log("Try block ended");

// }
// catch(e){
// console.log("Catch block started");
//     console.log("Error:", e.message);
//     console.log("Catch block ended");
//     console.log("Error name:", err.name);

// }

// finally{
//     console.log("Finally block started");
//     // This block will always execute, regardless of whether an error occurred or not
//     console.log("Finally block ended");
// }



// lets Create Custom Error

// try {
//     console.log(x); // This will throw a ReferenceError because 'x' is not defined
     
// }
// catch(e){   
//       throw new Error("Bhai Pahle decleare Karalo uske badd use Karo"); // Custom error message by using throw key wod
// }



// let errorcode=100;
//     if(errorcode == 100){
//         throw new Error("invild json ");
//         // console.log("Invalid JSON");
//     }   
    