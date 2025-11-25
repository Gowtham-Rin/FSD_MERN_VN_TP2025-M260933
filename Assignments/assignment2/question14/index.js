let apps = ["instagram","Youtube","LinkedIn","Facebook","Twitter"];

// destructuring first two and collecting apps

let [app1,app2, ...others] = apps;

console.log(`First App: ${app1}`);
console.log(`Second App: ${app2}`);
console.log(`Others Apps: ${others}`);