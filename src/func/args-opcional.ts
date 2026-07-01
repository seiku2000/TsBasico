
const fullName =(firstName:string,lastName?:string):string => {
    return `${firstName} ${lastName || 'falta apellido'}`;
}
const name = fullName("john");
console.log(name);
