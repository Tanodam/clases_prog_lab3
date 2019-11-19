///  <reference path="Persona.ts"/>

namespace model{

   export enum tipo
    {
        Senador, Diputado
    }

  export  class Legislador extends Persona
    {
        private _tipo:tipo;
    
        constructor(nombre:string, apellido:string, email:string, edad:number, sexo:sexo, tipos:tipo){
            super(nombre, apellido, email, edad, sexo)
            this._tipo = tipos;
        }
    
        get tipos():tipo{
            return this._tipo;
        }
        set tipos(t:tipo){
            this._tipo = t;
        }
    }   
  
}