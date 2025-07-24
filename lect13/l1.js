//AddEventListener in JavaScript is used to attach an event handler to a specified element.

// function changeText(event) {///
//     console.log(event);
//     let fpara = document.getElementById("fpara");
//     fpara.textContent = "Hello Mukesh  Jee";
// }

// let fpara = document.getElementById("fpara");

// fpara.addEventListener("dblclick", changeText);
// // fpara.removeEventListener("click", changeText);  is not working because event listener is removed



// let anchor=document.getElementById("fanchor");
// function changeText(event){
//     event.preventDefault(); // Prevent the default action of the anchor tag
//     console.log("Anchor clicked, but default action prevented.");
//     anchor.textContent = "change ho gaya bhai "; // Change the text of the anchor
// }

// anchor.addEventListener  ("click", changeText);

                          // Here is the code to alert when a paragraph is clicked By we using addEventlistner By using paragra

// let para = document.querySelectorAll('p');
// function alertpara (event) {
//         alert("You clicked on a paragraph!" + event.target.textContent);
//     }   

// for (let i = 0; i < para.length; i++) {
//     let paras = para[i];
//     paras.addEventListener('click', alertpara);
// }

// This code will alert when any paragraph inside the div with id "wrapper" is clicked

let mydiv = document.getElementById("wrapper");
document.addEventListener("click", alertpara);
// function alertpara (event) {
//         alert("You clicked on a paragraph!" + event.target.textContent);
// }


//when we want to only use alert in span tag then we use this type of code
function alertpara(event) {
    if (event.target.tagName === 'SPAN') {
        alert("You clicked on a span!" + event.target.textContent);
    }
}