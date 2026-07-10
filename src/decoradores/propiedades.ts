function readonly(isWritable:boolean = true):Function{
    return function(target:any,propertykey:string){

        const decriptor :PropertyDescriptor = {
            
        }

        return decriptor;
    }
}




export class Pokemon {
    

    @readonly()
    public publicApi:string = "https://pokeapi.co";

    constructor(
        public name:String,
        
    ){
    }
    savePokemonToDb(id:number){
        console.log(`pokeId guardado en db: ${id}`)
    }
}