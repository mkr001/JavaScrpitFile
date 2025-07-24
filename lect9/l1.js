// let obj={
//     Age:18,
//     wt:50,
//     ht:5.7
// }

// // console.log(obj);

// obj.color="white";
// // console.log(obj);

// // let obj1=obj;//it is copy not 
// // console.log(obj1); //Here op is { Age: 18, wt: 50, ht: 5.7, color: 'white' } But it is Not cloning  it referincing
// let obj2={...obj} //we create new variable(obj2) and again we clone by using(...operator ) this spread operator and this is cloning
// obj.Age=90;
// console.log(obj2);//not change in obj2 it is clonning 
// console.log(obj);//we can see here change in (obj) object only change in obj object 



//2nd Step  to clone the object;

// let src={
//     Age:23,
//     wt:68,
//     he:6.7
// };
 
// // src.Age=30;
// console.log (src);
// let dest=Object.assign({},src);

// src.Age=30;
// console.log (src);

// console.log(dest);



// 3rd step iterationthrough



let src={
Age:16 ,
Wei:45,
Hei:139
}


let dest ={}

for(let key in src){
    let newkey=key
    let newvaluey=src[ key]
    dest [newkey ]=newvaluey;
    console.log(dest);
}


