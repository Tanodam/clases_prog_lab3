"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Avenger2 = /** @class */ (function () {
    function Avenger2(nombre) {
        this.nombre = "un Avenger";
        this.nombre = nombre;
    }
    return Avenger2;
}());
var av2 = new Avenger2("Hulk");
console.log("Clase: " + av2.nombre);
//Calss con atributo privado
var Avenger3 = /** @class */ (function () {
    function Avenger3(nombre, edad) {
        var _this = this;
        this._nombre = "un Avenger";
        this._edad = 24;
        this.mostrar = function () { return _this._nombre; };
        this._nombre = nombre;
        this._edad = edad;
    }
    Object.defineProperty(Avenger3.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (e) {
            this._edad = e;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger3;
}());
//hacerlo conanuncio, constructor, getter y setter con atribuyos privados
var av3 = new Avenger3("Ironman", 23);
console.log("Clase: " + av3.mostrar());
av3.edad = 35;
console.log("edad: " + av3.edad);
//clases con metodos estaticos
var Xmen = /** @class */ (function () {
    function Xmen() {
    }
    Xmen.nombre_de_clase = "Xmen";
    return Xmen;
}());
console.log("atributo estatico: " + Xmen.nombre_de_clase);
//Herencia
var AvengerHeredado = /** @class */ (function (_super) {
    __extends(AvengerHeredado, _super);
    function AvengerHeredado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AvengerHeredado;
}(Avenger2));
var ah = new AvengerHeredado("Hulk Heredado");
console.log(ah.nombre);
//Herencia2
var AvengerHerdado2 = /** @class */ (function (_super) {
    __extends(AvengerHerdado2, _super);
    function AvengerHerdado2(nombre, edad) {
        var _this = _super.call(this, nombre) || this;
        _this.edad = 0;
        _this.edad = edad;
        return _this;
    }
    return AvengerHerdado2;
}(Avenger2));
var ah2 = new AvengerHerdado2("Herdado2", 44);
console.log("heredado2: " + ah2.edad + "nombre: " + ah2.nombre);
///  <reference path="hello.ts"/>
var mens;
mens = 'Chau Mundoss';
//console.log(mens); 
//# sourceMappingURL=output.js.map