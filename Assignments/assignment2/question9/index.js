let person1 = 300;
let person2 = 500;

// check who earns more amounts

let result = (person1 > person2) ?
 `person 1 earns by ₹${person1 - person2}`:`person 2 earns by ₹${person2 - person1}`;

 console.log(result.toLocaleUpperCase());