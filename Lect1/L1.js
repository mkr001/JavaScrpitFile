//Artmetic Operator
let a = 10;
let b = 20;

// a=a+ 5;
a+=5;//Short Hand Trick

console.log(a);

// console.log(b%a);
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a**b);
// // Comparison Operator
// console.log(a==b);
// console.log(a>b)
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);



//Ternary Operator

// let Age =20;

// let canvote=(Age<=18)?"You can vote ":"you cannot vote";
// console.log(canvote);



// Logical Operator
//Logical and Operator &&

// let ans= true&&false
// let ans1= true&&true
// let ans2= false&&true
// let ans3= true&&false
// console.log(ans); // false
// console.log(ans1); // true
// console.log(ans2); // true
// console.log(ans3); // false

//Logical or Operator ||
// let ans4= true||false 
// let ans5= false||true
// let ans6= true||true
// let ans7= false||false
// console.log(ans4); // true
// console.log(ans5); // true
// console.log(ans6); // true
// console.log(ans7); // false


// Logical Not Operator !

// let ans8= !true
// console.log(ans8); // false


// Logical operator how to behave with non bollean values


// console.log(false||"Hello"); // "Hello"

// console.log(false||0);//0

// console.log(false||""); // ""

// console.log(false&&"Hello"); // false

// console.log(false&&0); // false
// console.log(false&&""); // false
// console.log(true&&"Hello"); // "Hello"

// console.log(10<<2);

//if-else Statement conditional statement
//one if one else
// let age = 20;
// let age=16
// if(age>18){
//     console.log("You are  eligible to vote");
// }
// else {
//     console.log("You are not eligible to vote");
// }

// if-else if-else Statement

// let num=15
// if(num>0){
//     if(num<16){
//         console.log("Number is in range");
//     }
//     else{
//         console.log("Number in  out of range");
//     }
// }
// else if(num>1){
//     console.log("Number is A");
// }

// else if(num>2){
//     console.log("Number is B");
// }

// else if(num>3){
//     console.log("Number is C");
// }
// else if(num>4){
//     console.log("Number is D");
// }
// else if(num>5){
//     console.log("Number is E");
// }
// else if(num>6){
//     console.log("Number is F");
// }
// else if(num>7){    
//     console.log("Number is G");
// }
// else if(num>8){                
//     console.log("Number is H");
// }
// else if(num>9){
//     console.log("Number is I");
// }                                                                  
// else if(num>10){
//     console.log("Number is J");
// }
// else{
//     console.log("Number is not in range");
// }




// Switch Statement
 let day = 4;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day")
        break;
    }  


