 
 /*
 la propiedad abstract en una clase, sirve para heredar propiedades 
 y metodos que luego seran implementados en las clases que heredan de ella
 
 */
 abstract class Mutante {
    constructor(
        public name:string,
        public realName:string
    ) {
      
    }
}

class Xmen extends Mutante {
    salvarMundo(){
       // console.log("salvando al mundo");
       return "salvando al mundo";
    }

}
// clase que hereda de Mutante 
class Villian extends Mutante {
    destruirMundo(){
        // console.log("destruyendo el mundo");
        return "destruyendo el mundo";
    }

}

const wolverine = new Xmen("wolverinee" , "logan");
console.log(wolverine.salvarMundo());

const magneto = new Villian("magneto" , "magnus");
console.log(magneto.destruirMundo());
//tambien se puede usar para polimorfismo  de forma mas segura 
const printName = (personaje:Mutante) => {
    //solo acepta instancias de Mutante o sus clases hijas
    console.log(personaje.name);
}

printName(wolverine);