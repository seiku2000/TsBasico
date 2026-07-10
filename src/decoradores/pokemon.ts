//decoraciones para clases

function printToConsole(contructor:Function){
//console.log(contructor);
}

const prinToConsoleConditional = (print:boolean 
    = false
):Function => {
  if(print){
//retorna el decorador de la funcion 
    return printToConsole;
  }else {
    return () => {};
  }
}



const bloquearProtitipo =  function(constructor:Function){
    //esto es como un candado para evitar 
    //que se puedan modificar las propiedades del prototipo
    Object.seal(constructor);
    Object.seal(constructor.prototype);

}
@bloquearProtitipo
@prinToConsoleConditional(true)

//con esto le decimos a typescript que esta funcion es un decorador
/*
es como si le pasaramos por parametro el constructor de la clase
lo cual nos permite modificarlo o extenderlo
*/
//@printToConsole
export class Pokemon {
    
    public publicApi:string = "https://pokeapi.co";

    constructor(
        public name:String,
        
    ){
    }
}