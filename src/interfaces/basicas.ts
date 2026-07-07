//a difrencia del type no puede expandirse como una clase es mas estatico
type Hero2 ={
    name:string,
    age?:number,
    powers:string[],
    getNombre?:() => string,
}



//interface es una forma de definir un tipo personalizado similar a un objeto
interface Hero  {
    name:string,
    age?:number,
    powers:string[],
    getNombre?:() => string,
}






let flash:Hero = {
    name: 'Barry Allen',
    age:25,
    powers: ['Super speed', 'Time travel']

}


let superman:Hero = {
    name: 'Clark Kent',
    age:30,
    powers: ['Super strength', 'Flight'],
    getNombre (){
        return this.name
        
    }
}

