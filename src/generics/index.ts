import  {printObject ,genericFunction, genericFunctionArrow}  from './generics'
import type {Hero,Villan} from './interfaces'

 /*
printObject(123);
printObject(new Date());
printObject([1, 2, 3]);
printObject({a: 1, b: 2, c: 3});
printObject(null);
printObject(undefined);
printObject('hola mundo');*/

/*
const name = 'jhon';
const funcionGenerica = genericFunction(123).toFixed(1);
console.log(funcionGenerica);
console.log(genericFunction(name).toUpperCase());
console.log(genericFunction(new Date()).getDate());*/


const dedpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dengerLevel:100
}
//los generics nos permite espesficar el tipo dato de salida
console.log (genericFunction<Villan>(dedpool).dengerLevel)






