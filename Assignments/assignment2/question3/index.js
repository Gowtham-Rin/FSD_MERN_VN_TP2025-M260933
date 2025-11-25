
// create a variable name
let name = "gowtham";

// greeting message

let message = `Hello ${name}! Welcome to javascript`;
console.log(message);

// convert to message for upperCase

console.log("UpperCase Name:",name.toUpperCase());

// check if this message more then 10 character

if(message.length > 20){
    console.log(` message has more then 10 character`);
}
else{
    console.log(` message has more or fever character`)
}

// check if message contain the words "javascript"

if(message.includes(`javascript`)){
    console.log(`this message contain the word "javascript"`);
}
else{
    console.log(`this message not contain the word "javascript"`);
}