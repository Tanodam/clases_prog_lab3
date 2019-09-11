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

console.log(p2.saludar());