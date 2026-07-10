
function CheckValidPokemonId(){
    return function(target:any,propertykey:string,descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
        //descriptor.value = () => console.log("antes de ejecutar");
     descriptor.value = (id:number) => {
        if(id < 1 || id > 800){
            throw new Error("El id debe estar entre 1 y 800");
        }else{
            return originalMethod(id);
        }
     }
    }
}


export class Pokemon {
    
    public publicApi:string = "https://pokeapi.co";

    constructor(
        public name:String,
        
    ){

    }
    @CheckValidPokemonId()
    savePokemonToDb(id:number){
        console.log(`pokeId guardado en db: ${id}`)
    }
}