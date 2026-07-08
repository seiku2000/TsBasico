export const printObject = (argument:any) => {
    console.log(argument);
}


//<T> indica que es T un tipo genericos
/*sirve para  dar salida  un tipo especifico
*/
export function  genericFunction<T>(argument:T){

    return argument;
    
}

export const genericFunctionArrow = <T>(argument:T) => argument;