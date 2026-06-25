//const numbers:(number | string | boolean)[]  = [1, 2,'a', 4, 5];
/*const numbers:(number )[]  = [1, 2,3, 4, 5];
console.log(numbers);
const villanos = ['Omega Rojo', 'Dormammu', 'Duende Verde'];    
villanos.forEach(villano => console.log(villano.toUpperCase()));
*/


//numbers.push(11);
//numbers.push(true);
//console.log(numbers);

const numbers:(number)[] = [1, 2, 3, 4, 5];
const numbers2:number[] = [6, 7, 8, 9, 10];
const villanos:string[] = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
let   numbers3 = [...numbers, ...numbers2];




numbers.push(11);

console.log(numbers);
console.log(numbers3);

villanos.forEach( villano => console.log(villano.toUpperCase()));

