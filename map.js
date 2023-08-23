const hello =new Map();
hello.set("car",500);
hello.set("bike",300);
hello.set("truck",200);
hello.set("bus",100);

// console.log(hello);
// console.log(hello.get("bike"))
// console.log(hello);

// console.log(hello.has("ship"))
// console.log(hello.has("bus"))
// console.log(hello);

// console.log(hello.delete("bus"))
// console.log(hello);

// console.log(hello.entries("bus"))
// console.log(hello);

// console.log(hello.size);
// console.log(hello);

let a=" ";
hello.forEach(function(value,key)
{
a += key + "-" + value + "\n" ;    
})
console.log(a);
