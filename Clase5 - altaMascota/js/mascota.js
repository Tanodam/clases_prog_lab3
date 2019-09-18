let mascotas = [];

function Mascota(nombre, edad, tipo, castrado, vacunado, desparasitado, alimento){
this.nombre = nombre;
this.edad = edad;
this.tipo = tipo;
this.castrado = castrado;
this.vacunado = vacunado;
this.desparasitado = desparasitado;
this.alimento = alimento;

}
//Sobreescritura del to string
// Mascota.prototype.toString = function(){
//     return `Hola soy un ${this.tipo} y me llamo ${this.nombre} y tengo ${this.edad} años`;
//}

