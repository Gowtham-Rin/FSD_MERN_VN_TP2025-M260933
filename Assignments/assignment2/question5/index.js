// the numbers

let numbers = [20,30,13,40,22];

// claculate them sum

let sum = 0;

for (let i = 0;i <numbers.length ; i++) {
    sum += numbers[i];
    
}
console.log(`Sum =`,sum);


// find the largest numbers

let largest = numbers[0];

for (let i =0; i <numbers.length; i++){
  if(numbers[i] > largest){
    largest = numbers[i];

  }

}
console.log(`largest number of:`,largest);
