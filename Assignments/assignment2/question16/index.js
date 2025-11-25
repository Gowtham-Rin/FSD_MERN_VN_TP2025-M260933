function Placeorder(callback){
    setTimeout(()=>{
        console.log(`Order Placed`);
        callback();

    },1000);
    
}

function Foodcooking(callback){
    setTimeout(()=>{
        console.log(`Food cooking`);
        callback();

    },2000);
    
}

function FoodDelivered(callback){
    setTimeout(()=>{
        console.log(`Food Delivered`);
        
    },1500);
     
}



Placeorder(() => {
    Foodcooking(() => {
        FoodDelivered();
    });
});

