let avenger:number = 50;

console.log(avenger);

const villans = 20;

if(avenger  < villans){
    console.log("se necesitan mas avengers")
}else{
    console.log("tenemos suficientes avengers")
}

avenger = Number('55A');
console.log({avenger});//DA NaN porque no es un numero valido, si se pone un numero valido si lo convierte a numbers