let a = 496;
let sum = 0;

function perfectNumber(){
    for (let i = 1; i < a; i++) {
        if(a % i === 0){
            sum += i;
        }   
    }
    if (sum == a){
        console.log("Number Is Perfect");
    }
    else{
        console.log("Number Is Not Perfect");
    }
}
    
perfectNumber();