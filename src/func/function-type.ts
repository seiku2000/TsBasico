const addNumber = (a:number , b:number):number => a + b;

const greet = (name:string):string => `hola${name}`;

const saveTheWorld = () => `EL mundo esta salvado!`;

//!let myFunction:(a:number,b:number) => number;
//myFunction =10;

//?let myFunction:(name:string) => string;
//despues de los :sabremos el tipo de dato recibir cualquier funcion
let myFunction:() => string;



//console.log(myFunction);

//*myFunction  = addNumber;
//*console.log(myFunction(5,10));



//*myFunction  = greet;
//*console.log(myFunction('Jorge'));

myFunction = saveTheWorld;
console.log(myFunction());




