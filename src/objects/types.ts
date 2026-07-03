type Hero = {
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