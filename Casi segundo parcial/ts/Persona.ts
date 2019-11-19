namespace model{

    export enum sexo
    {
        Masculino,
        Femenino
    }
    export class Persona
    {
        protected _id:any;
        protected _nombre:string;
        protected _apellido:string;
        protected _email:string;
        protected _edad:number;
        protected _sexo:sexo;
    
        constructor(nombre:string, apellido:string, email:string, edad:number, sex:sexo){
            this._id = 1; //TODO
            this._nombre = nombre;
            this._apellido = apellido;
            this._email = email;
            this._edad = edad;
            this._edad = edad;
            this._sexo = sex;
        }
    
        get id():any{
            return this._id;
        }
    
        get nombre():string{
            return this._nombre;
        }
        set nombre(n:string){
            this._nombre = n;
        }
    
        get apellido():string{
            return this._apellido;
        }
        set apellido(a:string){
            this._apellido = a;
        }
    
        get email():string{
            return this._email;
        }
        set email(e:string){
            this._email = e;
        }
    
        get edad():number{
            return this._edad;
        }
        set edad(e:number){
            this._edad = e;
        }
    
        get sex():sexo{
            return this._sexo;
        }
        set sex(s:sexo){
            this._sexo = s;
        }
    }
    
   
}



