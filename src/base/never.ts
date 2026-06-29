let mensaje:string = "eror no existe";

//la funcion never siempre termina error y la ejecucion
const error = (mensaje:string):(never | number) => {
if(false){
    throw new Error(mensaje);
}
return 1
}

error(mensaje);
//esto ya no entra a causa del never
//que termina la ejecucion del programa
console.log("Hola mundo");
