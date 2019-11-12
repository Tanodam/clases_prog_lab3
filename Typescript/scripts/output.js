"use strict";
///  <reference path="bye.ts"/>
var mensaje;
mensaje = 'Hola mundos';
//console.log(mensaje);
/*
///Array
let vector:number[] = [1,2,3,4];
///Tupla = vector de lo que quieras
let tupla:[number,string] = [1, "Ironman"];
*/
//Enum
var Eheroe;
(function (Eheroe) {
    Eheroe[Eheroe["Xmen"] = 0] = "Xmen";
    Eheroe[Eheroe["Avenger"] = 1] = "Avenger";
})(Eheroe || (Eheroe = {}));
//console.log("Enum..");
//console.log(Eheroe.Avenger);
//console.log(Eheroe[Eheroe.Avenger]);
for (var key in Eheroe) {
    //console.log(key);
}
//Funciones                                 Esto indica un parametro por defecto
var funcionEnviarMision = function (heroe /*="Spiderman"*/) {
    return heroe + " enviado";
};
var retorno = funcionEnviarMision("Spiderman");
//console.log(retorno);
//parametros rest
var funcionEnviarMision2 = function () {
    var heroes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        heroes[_i] = arguments[_i];
    }
    for (var i = 0; i < heroes.length; i++) {
        console.log(heroes[i] + " enviado");
    }
};
funcionEnviarMision2("Batman", "Ironman", "Hulk");
//funcion flecha
var funcionEnviarMision3 = function (heroe) {
    if (heroe === void 0) { heroe = "Black Widow"; }
    return heroe + " enviado a mision 3";
};
console.log(funcionEnviarMision3());
//tipo en el objeto
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre", "viaja en el tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
var ironman = {
    nombre: "Tony Stark",
    edad: 24,
    poderes: ["tirar la chancleta"],
    getNombre: function () { return this.nombre; }
};
console.log(ironman.getNombre());
var wolverine = {
    nombre: "James"
};
console.log(wolverine.nombre);
//interfaces en clase
var Avenger = /** @class */ (function () {
    function Avenger() {
        this.nombre = "un avenger";
    }
    return Avenger;
}());
var Mutante = /** @class */ (function () {
    function Mutante() {
        this.nombre = "un avenger";
    }
    return Mutante;
}());
var unAvender = new Avenger();
var unMutante = new Mutante();
console.log("unavenger: " + unAvender.nombre);
console.log("unmutante: " + unMutante.nombre);
var miFuncion;
miFuncion = function (num1, num2) { return num1 + num2; };
console.log(miFuncion(1, 4));
//clases
///  <reference path="hello.ts"/>
var mens;
mens = 'Chau Mundoss';
//console.log(mens); 
//# sourceMappingURL=output.js.map