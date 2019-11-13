///  <reference path="bye.ts"/>
let mensaje:string;
mensaje = 'Hola mundos';
//console.log(mensaje);
/*
///Array
let vector:number[] = [1,2,3,4];
///Tupla = vector de lo que quieras
let tupla:[number,string] = [1, "Ironman"];
*/
//Enum
enum Eheroe{
    Xmen,
    Avenger
}
//console.log("Enum..");
//console.log(Eheroe.Avenger);
//console.log(Eheroe[Eheroe.Avenger]);
for(let key in Eheroe)
{
    //console.log(key);
}

//Funciones                                 Esto indica un parametro por defecto
let funcionEnviarMision = function(heroe?:string/*="Spiderman"*/):string {// ? indica que es un parametro opcional
    return heroe + " enviado";
}

let retorno:string = funcionEnviarMision("Spiderman");
//console.log(retorno);

//parametros rest

let funcionEnviarMision2 = function(...heroes:string[]):void{
    for(let i=0; i<heroes.length;i++)
    {
        console.log(heroes[i] + " enviado"); 
    }
}

funcionEnviarMision2("Batman","Ironman", "Hulk");

//funcion flecha

let funcionEnviarMision3 = (heroe:string="Black Widow"):string=>{
    return heroe + " enviado a mision 3";
}
console.log(funcionEnviarMision3());

//tipo en el objeto
let flash:{nombre:string, edad:number, poderes:string[],getNombre:()=>string} =
{
    nombre:"Barry Allen",
    edad:24,
    poderes:["Corre", "viaja en el tiempo"],
    getNombre(){
        return this.nombre;
    }
}

//tipo personalizado
type Heroe = {nombre:string, edad:number, poderes:string[],getNombre:()=>string};
let ironman:Heroe = {
    nombre: "Tony Stark",
    edad:24,
    poderes:["tirar la chancleta"],
    getNombre:function(){return this.nombre;}
}

console.log(ironman.getNombre());

//interfaces

interface IHeroe{
    nombre:string,
    poder?:string,
    mostrar?():string
}
let wolverine:IHeroe = {
    nombre : "James"
}
console.log(wolverine.nombre);

//interfaces en clase
class Avenger implements IHeroe{
    nombre:string = "un avenger";
}

class Mutante implements IHeroe{
    nombre:string = "un avenger";
}

let unAvender = new Avenger();
let unMutante = new Mutante();
console.log("unavenger: " + unAvender.nombre);
console.log("unmutante: " + unMutante.nombre);


//interfaZ EN la funcion
interface IfuncDosNumeros{
    (num1:number,num2:number):number
}

let miFuncion:IfuncDosNumeros;
miFuncion = (num1,num2)=>num1+num2;
console.log(miFuncion(1,4));

//clases
class Avenger2 implements IHeroe{
    nombre:string = "un Avenger";

    constructor(nombre:string){
        this.nombre = nombre;
    }
}

let av2 = new Avenger2("Hulk");
console.log("Clase: " + av2.nombre);


//Calss con atributo privado
class Avenger3{
    private _nombre:string = "un Avenger";
    private _edad:number = 24;
    constructor(nombre:string, edad:number){
        this._nombre = nombre;
        this._edad = edad;
    }
    get edad():number{
        return this._edad;
    }
    set edad(e:number){
        this._edad = e;
    }

    public mostrar = ()=>this._nombre;

}

//hacerlo conanuncio, constructor, getter y setter con atribuyos privados

let av3 = new Avenger3("Ironman", 23);
console.log("Clase: " + av3.mostrar());
av3.edad = 35;
console.log("edad: " + av3.edad);

//clases con metodos estaticos
class Xmen{
    static nombre_de_clase = "Xmen";
}

console.log("atributo estatico: "+ Xmen.nombre_de_clase);

//Herencia
class AvengerHeredado extends Avenger2{

}
let ah = new AvengerHeredado("Hulk Heredado");
console.log(ah.nombre);

//Herencia2
class AvengerHerdado2 extends Avenger2{
    edad:number=0;
    constructor(nombre:string,edad:number){
        super(nombre);
        this.edad=edad;
    }
}

let ah2:AvengerHerdado2 = new AvengerHerdado2("Herdado2",44);
console.log("heredado2: " + ah2.edad + "nombre: " + ah2.nombre );