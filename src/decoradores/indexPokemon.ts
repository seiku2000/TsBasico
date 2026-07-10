import { Pokemon } from "./pokemon";
import { Pokemon as PokemeTodo } from "./funciones";
import { Pokemon as PokemonProp } from "./propiedades";

const pokePika = new PokemonProp('pikachu');

//(Pokemon.prototype as any).customName = "charizard"
//console.log(pokePika)

const pokeChar = new PokemonProp('charizard');
//console.log(pokeChar)

//console.log(pokePika.savePokemonToDb(500));
pokePika.savePokemonToDb(100);