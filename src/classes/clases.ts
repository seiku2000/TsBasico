class Avenger {
   // private nombre:string = '';
    //public equipo:string = '';
    //public realName?:string = '';
    //solo desde la clase se puede acceder ala propiedad
    static age:number = 35;
    static getAvgAge(){
      return this.name

    }

    constructor( private nombre:string ,
                 public equipo:string,
                 public realName?:string,
                 avAge: number = 35,
               ){
       // this.nombre = nombre;
        //this.equipo = equipo;
       // this.realName = realname;
      Avenger.age  = avAge;
      
           }

           public bio(){
            return `${this.nombre} - ${this.equipo}`


           }
}

let ant= 'Antman';
let captain = 'Capitan America';
let scott = 'Scott Lang';

//const antman:Avenger = new Avenger();
//console.log(antman);
const antman:Avenger = new Avenger( 'Antman','Capitan America','Scott Lang');
const antman2:Avenger = new Avenger( ant,captain,scott);

/*
console.log(antman);
console.log(antman2);
console.log(antman.bio());*/
console.log(antman);



//forma de llamar a una propiedad estatica
console.log(Avenger.age);
console.log(Avenger.getAvgAge());


