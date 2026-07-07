

//la interface principal va arriba  
interface Character {
    id:number;
    name:string;
    age?:number;
    direccion:Address;
    getFullAddress( id:number):string
}
//la interface secundaria va abajo aqui no influye el orden de lectura del compilador
interface Address {
    ciudad?:string,
    pais:string,
    calle?:string,
    zip:number
}

const  personaje:Character = {
    id:1,
    name: 'perter parker',
    age:20,
    direccion: {
        ciudad: 'New York',
        pais: 'USA',
        calle: 'Main Street',
        zip: 2324
    },
    getFullAddress(id:number) {
        if(id === this.id){
            let {pais,zip,calle,ciudad} = this.direccion
            return `${ciudad}, ${pais}, ${calle}, ${zip}`;
        }
        return 'no se encontro personaje'
        
        
    },

}


const otroPersonaje:Character = {
    id:2,
    name:'dr banner',
    age:45,
    direccion: {
        ciudad: 'New York',
        pais: 'USA',
        calle: 'Main Street',
        zip: 2324
    },
     getFullAddress(id:number) {
        if(id === this.id){
            let {pais,zip,calle,ciudad} = this.direccion
            return `${ciudad}, ${pais}, ${calle}, ${zip}`;
        }
        return 'no se encontro personaje'
        
        
    },
}

console.log(personaje);
console.log(personaje.getFullAddress(1));