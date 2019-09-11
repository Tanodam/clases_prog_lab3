var x = function(){
    return 4+3;
};

function Persona(nombre, apellido, edad){
    this.nombre = nombre; 
    this.apellido = apellido;
    this.edad = edad;
    this.saludar = function(){
        return "Hola, me llamo" + this.nombre;
    }
}
 
var p1 = new Persona("Jose", "Peoe", 15);
var p2 = new Persona( "Ana", "Gonzalez", 20);
p1.altura = 1.80;
Persona.prototype.altura = 1.5;

console.log(p1.altura);
console.log(p2.altura);