// 1. function constructor
// 2. Arrow function (ES6)
// 3. IIFE-> Immidetily Invoking Function Expression,
// 4. function Objects
// 5. this keyword
// 6. callback function
// 7. rest parameter
// 8. generator


// 1. function constructor
// let product = new Function("a", "b", "return a+b") 
// console.log(product (20,6));

// function Product(a,b){
//      return a *b;
// }
// console.log(15*5);

// 2. 1.Arrow Function 
// let x = (a,b) =>{
// let sum = a+b;
// return sum;
// }
// 2.
// let x = (a,b) => a*b; 
// console.log(x(15,20));


// 3. IIFE I

// (function(){
//  console.log("Hello Wolrd.....") ;
// })();
// ((a,b)=>{
//  console.log("Product is: ", a*b);
// })(22,3);


// 4.// 1. function Objects 
// function SumAll(){
// return arguments.length;
// }
// let text = SumAll(1,2,3,4,5);
// console.log(text);

// 2.
// function SumA11(){ let s = 0;

//     for (let i=0; i<arguments.length; i++){
    
//     s + arguments[i];
   
//     }
   
//     return s;
// }
// let text = SumA11(1,2);
// console.log(text);


// 5. // this keyword
// let person = {firstName: "Skill",
//             lastname: "Qode",
//             age: 11,
// Fullname: function(){

//     return this.firstName + " " + this.lastname;
// }
// }
// console.log(person.age);
// console.log(person. Fullname());

// 6. Callback function
//  function hello(){
//  console.log("Hello Wolrd");
//  }
// function skill(s, callback) { 
//     console.log("Hi....", s);
//     callback(); 
// }
//  skill("Peter", hello);