//Event Loop in javaScript three main components: Call Stack, Web APIs, and Callback Queue. 
//  Synchronous Example
 console.log("Start");

function greet() {
  console.log("Hello, User!");
}

greet();

console.log("End");

// Asynchronous Example
console.log("Start");

setTimeout(() => {
  console.log("Hello, User!");
}, 2000); // waits for 2 seconds

console.log("End");
