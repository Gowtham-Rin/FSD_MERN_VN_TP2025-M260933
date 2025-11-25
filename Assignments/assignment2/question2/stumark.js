let marks =75; // you can change this value to test 
let age = 19;

//marks calculation

if(marks >= 90 && marks <= 100){
    console.log( `${marks} you are A Grade`);
}
else if( marks >= 75 && marks <= 90){
   console.log(`${marks} you are B Grade`);
}
else if(marks >= 50 && marks <=75){
    console.log(`${marks} you are C Grade`);
}
else {
   console.log(`${marks} you are F Grade`);
}


// Adult or Minor using ternary oparetor

let result = (age >= 18) ? "Adult" : "Minor" ;
console.log(result);