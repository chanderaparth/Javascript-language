let result;
let data = "hi , how are you? You are fine??????";
// data  = data.replace("you ", "hello ");
// data  = data.replace("/you/i ", "hello ");
// data  = data.replace("/you/g", "hello ");
data  = data.replaceAll("you", "hello ");
console.log(data);


