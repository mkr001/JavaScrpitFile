                      //We create A variable inside Global Scope then What will Happen 
// Lets Go See 
// var age=15;
// console.log(age);

// {
//     console.log(age)
// }

// if(true){
//     console.log(age)
// }

// for(let i=0;i<4;i++){
//     console.log(age);   
// }


// function sayhello(){
//     console.log(age)
// }

// sayhello();


// let  age=15;
// console.log(age);

// {
//     console.log(age)
// }

// if(true){
//     console.log(age)
// }

// for(let i=0;i<4;i++){
//     console.log(age);   
// }


// function sayhello(){
//     console.log(age)
// }

// sayhello();


// const age=15;
// console.log(age);

// {
//     console.log(age)
// }

// if(true){
//     console.log(age)
// }

// for(let i=0;i<4;i++){
//     console.log(age);   
// }
// function sayhello(){
//     console.log(age)
// }

// sayhello();

                      //If We Crate Variable Inside Function Scope What Will Happen 

                      // var
// function sayhello(){
//     var duniya = "Earth";
//     console.log("haillo Duniya " + duniya)
// }
//>>>>>>>> //console.log(duiya)Error Not Access Outside function
// sayhello();
                 // let
// function sayhello(){
//  let duniya = "Earth";
//     console.log("haillo Duniya " + duniya)
// }
//>>>>>>>> //console.log(duiya)Error Not Access Outside function
// sayhello();
                 //const
// function sayhello(){
//     const duniya = "Earth";
//     console.log("haillo Duniya " + duniya)
// }
//>>>>>>>> //console.log(duiya)Error Not Access Outside function
// sayhello();


 //If We Crate Variable Inside Block Scope What Will Happen 

//  console.log(Age); Access But Undefined 
// {
//     var Age=10;//Easly Acces Outside Block Space

// }                    
// console.log(Age);
                     // const

// {
//  const Age=10;//Not Acces Outside Block Space
// }                    
//  console.log(Age);
                      //let
{
        let Age=10;//Not Acces Outside Block Space
}                    
 console.log(Age);