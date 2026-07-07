class Apocalipses {
    static instance:Apocalipses
   private constructor(public name: string) {
    }



    //principio de encapsulamiento - solo se puede acceder a través de este método singleton
    static callApocalipsis():Apocalipses{
        //si no existe la instancia, la creamos
        if(!Apocalipses.instance){
            Apocalipses.instance = new Apocalipses("soy apocalipsis")
        }
        //pero si ya existe, retornamos la misma instancia
        return Apocalipses.instance

    }
    changedName(newName:string):void {
        this.name =  newName;
    }


}

//otra forma de crear la instancia mas privada
const apocalipsis1 = Apocalipses.callApocalipsis();

apocalipsis1.changedName("Xavier");
console.log(apocalipsis1);





/*
const apocalipsis = new Apocalipses("Apocalipsis");

let  {name}  =apocalipsis;
console.log(apocalipsis);
console.log(name);*/

//console.log(apocalipsis.)