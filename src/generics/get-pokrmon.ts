import axios from "axios";
import type {Pokemon} from './interfaces' 



export const getPokemon = async(pokemonId:number):Promise<Pokemon>=> {
    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
 let {data} =resp; 
 console.log(data.name); 
return data;
}

