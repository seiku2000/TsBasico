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

    getFullNameDesdeXmen() {
        console.log(super.getFullName());
    }



}


const wolverine = new xMen('Wolverine', 'X-Men', true);
//console.log('incii');
console.log(wolverine);
wolverine.getFullNameDesdeXmen();



