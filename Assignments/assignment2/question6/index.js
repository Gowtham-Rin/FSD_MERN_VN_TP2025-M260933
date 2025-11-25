
let totalseats = 120;
let bookedseats = 78;


// calculate avalaible bookedseats 

let availableseats = totalseats - bookedseats ;
console.log(`avalaible Seats:`,availableseats);

// available seats

let status = "";

if(availableseats < 20 ){
    status =`Almost full`;
}
else if(availableseats >= 20 && availableseats <= 60){
   status= `Modarate availability`;
}
else{
    status= `plenty of seats available`;
}

console.log(`Status: ${status}`);