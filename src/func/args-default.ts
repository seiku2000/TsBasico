
const fullName =(firstName:string,lastName?:string,upper:boolean =false):string => {
    
    if(upper){
         return `${firstName} ${lastName || 'falta apellido'}`.toUpperCase();
    }
    else{
         return `${firstName} ${lastName || 'falta apellido'}`;

    }
   
}
const name = fullName("john", 'doe',true);
console.log(name);
