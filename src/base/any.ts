let avenger:any = 123;
const exists = false;
let power;

avenger = "dr . strange";
console.log((avenger as string).charAt(0));
//forma de castiar de un any a un string
avenger = 150.23244343;
console.log((avenger as number).toFixed(2 )); 
//forma hacer casting de un any a un number

console.log({exists});
console.log({power});