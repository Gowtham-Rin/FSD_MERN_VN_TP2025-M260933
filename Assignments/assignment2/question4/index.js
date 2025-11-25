// cerate a array with five items 
let fruts = ["Apple","Banana","Pineapple","Orange","Stabarry"];

console.log(`Original Array:`,fruts);

// push methods use case of add the new item from end of index

fruts.push("grapes");
console.log("After push:",fruts);

// pop methods use case of end index of item removed

fruts.pop();
console.log("After pop:",fruts);

// shift methods removed from at begging from items

fruts.shift();
console.log("After shift:",fruts);

//unshift methods adding the new item from begging

fruts.unshift("Mango");
console.log("After unshif:t",fruts);

// final array 

console.log(`After Final array`,fruts);