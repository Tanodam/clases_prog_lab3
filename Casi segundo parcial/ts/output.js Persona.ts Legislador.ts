"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Legislador = /** @class */ (function (_super) {
    __extends(Legislador, _super);
    function Legislador(nombre, apellido, email, edad, sexo, tipo) {
        var _this = _super.call(this, nombre, apellido, email, edad, sexo) || this;
        _this._tipo = tipo;
        return _this;
    }
    Object.defineProperty(Legislador.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (t) {
            this._tipo = t;
        },
        enumerable: true,
        configurable: true
    });
    return Legislador;
}(Persona));
var Tipo;
(function (Tipo) {
    Tipo[Tipo["Senador"] = 0] = "Senador";
    Tipo[Tipo["Diputado"] = 1] = "Diputado";
})(Tipo || (Tipo = {}));
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, email, edad, sexo) {
        this._id = 1; //TODO
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._edad = edad;
        this._edad = edad;
        this._sexo = sexo;
    }
    Object.defineProperty(Persona.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (n) {
            this._nombre = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (a) {
            this._apellido = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (e) {
            this._email = e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (e) {
            this._edad = e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (s) {
            this._sexo = s;
        },
        enumerable: true,
        configurable: true
    });
    return Persona;
}());
var Sexo;
(function (Sexo) {
    Sexo[Sexo["Masculino"] = 0] = "Masculino";
    Sexo[Sexo["Femenino"] = 1] = "Femenino";
})(Sexo || (Sexo = {}));
//# sourceMappingURL=output.js Persona.ts Legislador.ts.map