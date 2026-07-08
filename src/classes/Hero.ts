import  type {HeroInterface } from'./HeroInterface'
export class Hero implements HeroInterface {
    constructor(
        public name:string,
        public powerId:number,
        public age:number
    ){

    }
}
export const pi = 3.1416;