
//namespace es como un contenedor de funciones o un bloque de codigo
namespace Validations {
   export const isValidText = (text:string) => {
        if(text.length > 3){
            return true;
        }
        return false;
    }
  export  const isValidDate = (fecha:Date) =>{
        return (isNaN(fecha.valueOf())) ? false :true;
    }


}

console.log(Validations.isValidText("texsts"));
console.log(Validations.isValidDate(new Date()));