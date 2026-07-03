type Heroes ={
    capitan: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
}





const avenger:Heroes = {
    capitan: 'Steve Rogers',
    ironman: 'Tony Stark',
    vision: 'Vision',
    activo: true,
    poder: 1500
}
//const {capitan,ironman,vision,activo,poder } = avenger;
//console.log(capitan,vision.toLowerCase(),poder.toFixed(3));
const printAvenger = ({capitan/*,ironman,vision,activo,poder*/ ,...resto}:Heroes):void=>{


    console.log(capitan,resto);
    /*
 return {
    capitan,
    ironman,
    vision,
    activo,
    poder
 }*/

}
printAvenger(avenger);
//printAvenger(avenger);
/*
let imprimir = printAvenger(avenger);
console.log(imprimir);*/
