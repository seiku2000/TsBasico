const a:number= 10;
let b:string;
b="hola como estas";

function  sayHello(msg:string):void {
    console.log(msg);

}
const sayhello2 = () => {
   let b= "hola como estas de nuevo";
    return b;
}
console.log(a);
sayHello(b);

console.log(sayhello2())    

//console.log(a);
//console.log(b);

//console.log(`este es el valor ${a} y este valor es ${b}`);



