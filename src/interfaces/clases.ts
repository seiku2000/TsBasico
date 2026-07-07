interface Xmen {
    name:string;
    realName:string;
    mutantPower(id:number):string
}

interface Human {
    age:number;
}

class Muntant  implements Xmen,Human{

    
    public age: number;
    public name: string;
    public realName: string;

    constructor(
     age:number,
     name:string,
     realName:string
    ){
        this.age = age;
        this.name = name;
        this.realName = realName;
    }


    mutantPower(id: number): string {
        return `nombre:${this.name} secundario:${this.realName}`;
    }


}

const icicloped = new Muntant(25 ,"ícloped" , "Dr. Henry");
console.log(icicloped);