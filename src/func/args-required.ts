
//aqui los argumentos son obligatorios
const fullName =(firstName:string,lastName:string):string => {
    return `${firstName} ${lastName}`;
}
const name = fullName("john","done");
console.log(name);
