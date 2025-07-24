// Promise in js





//It Is Synchronous in nature
// let  firstPromise = new Promise((resolve, reject) => {
//        console.log("Promise is pending");  
//     //    resolve("Promise is resolved");
//     //  reject(new Error("Promise is rejected"));      
// });

// firstPromise
//   .then(result => console.log("Resolved:", result))
//   .catch(error => console.log("Caught Error:", error.message));

// It Is Asynchronous in nature
//Ist Way
// function saymyname(){
//     console.log("Mukesh");
// }

// setTimeout(saymyname, 10000); // waits for 10 seconds

// 2nd Way
// setTimeout(function saymyname(){
//     console.log("Mukesh");
// }
// , 10000); // waits for 10 seconds   

// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(function saymyname(){
//     console.log("Mukesh");
//     resolve("Promise is resolved after 10 seconds");
// }, 10000); //
// });



// let  promise1 = new Promise ((resolve, reject) => {
//    let success= false ; // Simulating success or failure
//    if(success) {
//        resolve("Promise is resolved successfully");
//    }    else {
//        reject(new Error("Promise is rejected"));
//    }
// });

// promise1.then((result)=>{
//     console.log("Resolved:", result);
//   }).catch((error) => {
//     console.log("Caught Error:", error );
//   }); 

// promise1.catch((error) => {
//     console.log("Caught Error:", error );
//   }); 


let firstPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("firstPromise is resolved after 10 seconds");
        resolve("Promise is resolved successfully");
      }, 50000); // waits for 10 seconds
});

let SecondPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Second promise  is resolved after 10 seconds");
        resolve("Promise is resolved successfully");
      }, 10000); // waits for 10 seconds
});

let ThirdPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Second promise  is resolved after 10 seconds");
        resolve("Promise is resolved successfully");
      }, 15000); // waits for 10 seconds
});

Promise.all([firstPromise, SecondPromise, ThirdPromise])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.log("Caught Error:", error);
  });