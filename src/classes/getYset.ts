class Avenger {

    constructor(
        public nombre: string,
        public equipo: string,

    ) {
        console.log('contructor de avenger');
    }
    //private desde solo la clase  
    //la diferencia protected es que solo se puede acceder dentro de la clase y sus hijos 
    protected getFullName() {
        return `${this.nombre} - ${this.equipo}`
    }
}

class xMen extends Avenger {

    constructor(equipo: string,
        nombre: string,
        public isMutant: boolean) {
        super(equipo, nombre);
        //despues del super  ya  no   
        console.log('Contructor XMen');

    }

    //el get es para regresar un valor y  no recibe parametros
    get fullName(){
        if(this.nombre === ''){
            throw new Error('El nombre no puede estar vacio');
        }
        return `${this.nombre} - ${this.equipo} - ${this.isMutant}`;
    }


    //a diferencia del get, el set no retonar nada y solo recibe un parametro
    set fullNamess( nombre:string){
        if(nombre === ''){
            throw new Error('El nombre no puede estar vacio');
        }
        this.nombre  = nombre;
    }

    getFullNameDesdeXmen() {
        console.log(super.getFullName());
    }
    



}


const wolverine = new xMen('Wolverine', 'X-Men', true);
//el get se usa como una propiedad no como un metodo
console.log(wolverine.fullName);
wolverine.fullNamess = 'nuevo nombre';
console.log(wolverine.fullName);
