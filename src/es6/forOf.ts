type Avenger = {
name:string;
weapon:string;
}

const iroman:Avenger = {
    name: 'Iro man',
    weapon:  'armadura  de hierro'
}

const capitanAmerica:Avenger = {
    name: 'Capitan America',
    weapon:  'Escudo'
}

const thor:Avenger = {
    name: 'Thor',
    weapon:  'Martillo'

}
const avengers:Avenger[] = [iroman,capitanAmerica,thor];

for(const avenger of avengers){
    let {name,weapon} = avenger;
    console.log(name,weapon );
   // console.log(avenger.name,avenger.weapon);
}