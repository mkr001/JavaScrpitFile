//Code to demonstrate the performance difference between appending multiple elements individually and using a DocumentFragment
// //code1


// const t1=performance.now();
// for(let i = 0; i < 100; i++) {
//     let para = document.createElement("p");
//     para.textContent = `This is paragraph number ${i + 1}`;
//     document.body.appendChild(para);
// }
// const t2=performance.now();
// console.log(`Time taken to append 100 paragraphs individually: ${t2 - t1} milliseconds`);

// // Using a single div to append all paragraphs at once


// //code2
// const t3 = performance.now();
// let mydiv = document.createElement("div");
// for(let i = 0; i < 100; i++) {
//     let para= document.createElement("p");
//     para.textContent = `This is paragraph number ${i + 1}`;
//     mydiv.appendChild(para);

// }

// document.body.appendChild(mydiv);
// const t4 = performance.now();
// console.log(`Time taken to append 100 paragraphs using a single div: ${t4 - t3} milliseconds`); 



// let fragment = document.createDocumentFragment();
// for (let i = 0; i < 100; i++) {
//     let para = document.createElement("p");
//     para.textContent = `This is paragraph number ${i + 1}`;
//     fragment.appendChild(para);
// }
// document.body.appendChild(fragment);
// console.log("100 paragraphs appended using DocumentFragment");





