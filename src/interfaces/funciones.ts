interface addTwoNumber {
    (a:number , b:number):number;
}

let sumar:addTwoNumber =(a:number,b:number)  => a + b;

console.log(sumar(1,2));