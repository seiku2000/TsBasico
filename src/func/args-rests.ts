
//permite que una funcion reciba mas argumenttos de los que soportaan
const fullName = (firstNAme:string,...restApellidos:string[]):string => {
//pero despues de ...rest ya no permite agregar mas args
    return `${firstNAme} ${restApellidos.join('')}`;
}

const superman  = fullName("Clark",'Kent ','Bruce',"wayne");
console.log(superman);
//onsole.log('hola')
