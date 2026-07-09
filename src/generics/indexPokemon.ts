import { getPokemon } from "./get-pokrmon";

let poke = getPokemon(2);
poke.then(data => console.log(data.name))
.catch(error => console.error(error))
.finally(() => console.log('fin de la ejecucion'));



/*
getPokemon(2)
.then(data=> console.log(data.name))
.catch( error => console.error(error) )
.finally(() => console.log('fin de la ejecucion'));*/