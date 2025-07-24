// let person={
//         Name:"Mukesh",
//         Age:22,
//         Phone_No:123347,
//         let:function(){
//             console.log("Mukesh kumar Info")
//         }
// };

// console.log(person);
// person.let()


// creation Off Array
// let Arrr=[1,2,3,4,5,]
// console.log(Arrr);

//Creation Off Array By Constructor
// let Arr=  new Array(`Mukesh`,1,`Kumar`);
// console.log(Arr);
// console.log(typeof(Arr));

// Acces off Array
// console.log(Arr[2]);
// Arr.push("Mukesh")
// Arr.push(20);
// Arr.push(30);
// Arr.push(40);
// Arr.push(50);
// Arr.pop();
// Arr.shift();
// Arr.unshift("Mukesh");
// console.log(Arr.slice(2,6))
// Arr.splice(1,0,"Kumar","Ray")
// console.log(Arr);


// map methon in Array

// let Num=[10,20,30,40,50,]

// console.log(Num);

// let Newnum=Num.map((Num,index)=>{
// console.log(Num+1,index)
// })



// let Num=[1,2,3,4]
// let newnum=Num.map((Num)=>{
//       return Num*Num
// })

// console.log(newnum);

// let arr=[1,2,3,4,5]
// let newarr=arr.map((number)=>{
//     return number*number 
// })
// console.log((newarr))


// let Num=[10,20,30,40,50,60,70]
// Num.map((Num )=>{
// // Number*Number
// // return Num*Num
// let Anum=Num*Num;
// console.log(Anum)
// })




// let Num=[12,24,36,48,60,72]

// Num.map((num)=>{
// console.log(num);
// console.log()
// })



//Filter Method In JavaScript 


// let Arr = [10,15,20,25,30,35,40,45]


// let Arra=Arr.filter((Num)=>{
//     if (Num%2===0){
//         return true;
//     }
//     return false;
// })

//console.log(Arra);

//Short hand Use Filter Methond In Array

// let Arr = [10,15,20,25,30,35,40,45]


// let Arra=Arr.filter((Num=>Num%2==0))
// console.log(Arra)

// or even it is also shorter FileSystemHand

// console.log([10, 15, 20, 25, 30, 35, 40, 45].filter(num => num % 2 === 0));


// let Array=['Mukesh',1,2,3]
// let Num=Array.filter((Num)=>{
// console.log(typeof(Num))
// });





// let arr = ['Mukesh', 'Ray', 1, "Kumar"];

// let strings = arr.filter((item) => {
//     if (typeof item === "string") {
//         console.log(item);
//         return true;
//     } else {
//         console.log(arr);
//         return false;
//     }
// });
// console.log(strings);// ['Mukesh', 'Ray', 'Kumar']


// Reduce Method
// let Arr =[1,2,3,4,5,6,7,8,9]
// let Ans=Arr.reduce((acc,num)=>{
//      return acc+num
// },0);
// console.log(Ans)


// let Array =[1,2,3,4,54,999,86,67,45,3,4,]

// Array.sort(function (a,b){
// return b-a
// });
// console.log(Array);

//index of

// let arr=[1,2,4,5,6,7,8,4]
// console.log(arr.indexOf(4));


// let users = [
//   { id: 1, name: 'Mukesh' },
//   { id: 2, name: 'Ray' },
//   { id: 3, name: 'Kumar' }
// ];

// let user = users.find((u) => u.name === 'Ray');

// console.log(user); // Output: { id: 2, name: 'Ray' }


let Array =[2,3,56,4,6,8,3,2]

let getsum=(arr)=>{
    let sum=0;
    arr.forEach((Value)=>{
        sum=sum+Value
    })
    return sum;
}




let totalsum=getsum(Array);
console.log(totalsum);


