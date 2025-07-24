class human{

    // Properties
   Age=100;
   #Wei=97;//private 
   Height=6;

 constructor(newage,newheigh,newwei){    //Here I can  easly Access even Private member bhi

    this.Age=newage;
    this.Height=newheigh;
    this.#Wei=newwei;

 }


   //Behivours
    walk(){
    console.log("I Am walking",this.#Wei)//here accsess by using this keyword
   }

   get fetchwight(){   //Here created getter  method private value ko get karne ke liye 
    return this.#Wei
   }

set age(value) {                //here created setter method private value ko modify karne ke liye
        this.#Wei = value;
    }

}


let x= new human(97 ,50 ,777);
 console.log(x.fetchwight);
 console.log(x)//human { Age: 97, Height: 50 }
//  console.log(x.Age=50,Height=9)
// console.log(x); //op>>>>human { Age: 100, Height: 6 }
// console.log(x.#Weight)//here not we can Access weight because this private  syntex Error
x.walk();//here access becuse walk method is inside class i can easly access


                     //but if i want to Acces outside in 
                      // class privete members how can i access.
                      //  i will be access with getter(),and setter() method;



