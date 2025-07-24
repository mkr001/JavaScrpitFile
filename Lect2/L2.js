// Loops ,string , break ,in JavaScript
// let name1 = "Mukesh Kumar Ray";

// for (let i=0; i<=10;i++){
// console .log(name1 + " " + i);
// }


// for (let i=0; i<=10;i++){
//   console.log(i); 
// } 


// for (let i=10; i>=1;i--){
//     console.log(i);
// }

//Break 

// for(let i=1; i<=10;i++){

//     if(i==5){
//         break; // Skip the rest of the loop when i is 5

//     }
//     else{
//         console.log(i); // This will print numbers from 1 to 4, and then stop
//     }

// }

// Continue


// for(let i=1; i<=10;i++){

//     if(i==5){
//         continue; // Skip the rest of the loop when i is 5

//     }
//     else{
//         console.log(i); // This will print numbers from 1 to 4, and then stop
//     }

// }
    
// While Loop


// i=1;
// while(i<=15){

//     if(i==10){
//         i++;
//         continue;
        
//     }
//     else{
//     console.log(i);
//     i++;
//     }
// }


// i=10;
// while (i>=11){
//     console.log(i);
//     i++;
//     break
// }
// console.log("Loop ended");

// i=30;
// while (i>=20){
//     console.log(i);
//     i--;
// }


// Do While Loop
// let i=1;
// do {
//     console.log("Mukesh" );
//     i++;
// }while(i<=10);


//String

// in doble couts
// let Fname="Mukesh kumar Ray";
// console.log(Fname); // Print the string
// console.log(Fname.length); // Length of the string
// console.log(typeof Fname); // Type of the string


// in single couts
// let Fname='Mukesh kumar Ray';
// console.log(Fname); // Print the string
// console.log(Fname.length); // Length of the string
// console.log(typeof Fname); // Type of the string

// in backticks   with the help of backticks we can write string in multiple lines
//  we can print the name in next line 

// let Fname=`Mukesh 

// kumar Ray`;
// console.log(Fname); // Print the string
// console.log(Fname.length); // Length of the string
// console.log(typeof Fname); // Type of the string



// String Object
// let fname =new String("Mukesh Kumar Ray");
// console.log(fname); // Print the string

// string operation

//concatination
// let fname=`Mukesh `;
// let lname=`kumar ray`;

//useing backtrick calculation 

// let fullname =`${fname} ${lname}`;
// console.log(fullname); // Print the string

// let fullname=fname + lname;
//  console.log(fullname); // Print the string

//length of string
// let Fname='Mukesh kumar Ray';
// console.log(Fname.length)

 

//convert to upper case
// let Fname1='Mukesh kumar Ray';
// console.log(Fname1.toUpperCase()); 
// convert to lower case
// console.log(Fname1.toLowerCase());

// let fname2=' Mukesh kumar Ray           ';

// console.log(fname2.trim())
// // trim() removes whitespace from both ends of a string

// let fname2="Mukesh Kuma ray";
// console.log(fname2.slice(0,5)); // Extracts characters from index 0 to 4


// let fname2="Mukesh Kumar  ray";
// console.log(fname2.replace("ray","Rayji")); // Replaces "kumar ray" with "Kumar Ray ji"

 // Checks if "ray" is present in the string
// let fname2="Mukesh Kumar  ray";
// console.log(fname2.includes("ray"));

//split in words

// let fname2="Mukesh Kumar  ray";
// let words= fname2.split("  "); 
// console.log(words)// Splits the string into an array of words

//Join Words

// let arr=["Mukesh" ,"Kumar","Ray"]
// console.log(arr.join(" "));


// findexindex

// let arr=["Mukesh" ,"Kumar","Ray"]

// console.log(arr.indexOf("Ray"));


// Repeat

let Str="Hii"
console.log(Str.repeat(5).trim());


