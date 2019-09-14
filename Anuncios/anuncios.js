var boton;
var descripcion = '';
var precio = 0;
var cantBaños = 0;
var cantDormitorios = 0;
var cantCocheras = 0;
var anuncio = {};
var nombre = '';
var arrayAnuncios = [];
var arrayAnunciosJSON = [];
window.addEventListener("load", function() {
    boton = document.getElementById('btnanuncio');
    boton.addEventListener("click", alta);
});

function alta() {
    nombre = document.getElementById('txtNombre').value;
    descripcion = document.getElementById('txtDescripcion').value;
    precio = document.getElementById('txtPrecio').value;
    cantBaños = document.getElementById('txtCantBaños').value;
    cantDormitorios = document.getElementById('txtCantDormitorios').value;
    cantCocheras = document.getElementById('txtCantCocheras').value;
    //console.log(nombre + " " + descripcion + " " + precio + " " + cantBaños + " " + cantDormitorios+ " " + cantCocheras);
    anuncio = {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            cantidadbaños: cantBaños,
            cantidaddormitorios: cantDormitorios,
            canidadcocheras: cantCocheras
        }
        //arrayAnuncios.push(anuncio);
    arrayAnunciosJSON.push(JSON.stringify(arrayAnuncios));
    console.log(arrayAnunciosJSON);
}