//el AS es una forma de renombrar una importacion
//import {Hero as HeroClass} from './Hero';

//importacion de todo el modulo
import powers from './data/powers';
import * as HeroCLasses      from './Hero';
//tambien podemos destructurar las exportacions 
const {pi}  = HeroCLasses

const Hero = 123;

const hero = new HeroCLasses.Hero('spiderman',1,25);
console.log(hero);
console.log(pi);

console.log(powers)