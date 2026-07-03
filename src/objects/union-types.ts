type Hero = {
    name:string,
    age?:number,
    powers:string[],
    getNombre?:() => string,
}
let myCustomVAriable:(string | number | Hero) = 'Hola';

console.log(myCustomVAriable);
myCustomVAriable = 20;
console.log(typeof myCustomVAriable);
myCustomVAriable = {
    name: 'bruce',
    age: 30,
    powers: ['inteligencia', 'dinero'], 
}

console.log(typeof myCustomVAriable);

