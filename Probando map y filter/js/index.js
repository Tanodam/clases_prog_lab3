let selPaises;
let selCiudades;
//sirve para filtrar elementos repetodos, se hace con array.unique
//Spread operator
Array.prototype.unique = function() {return [...new Set(this)]};

window.addEventListener('load', function(){
    selPaises = document.getElementById('selPaises');
    selCiudades = document.getElementById('selCiudades');
    //console.log(datos);
    //obtenerPaises(datos);
    //datos viene del data.js
    cargarSelect(selPaises, obtenerPaises(datos));
    cargarSelect(selCiudades, obtenerCiudades(datos, selPaises.value));

    selPaises.addEventListener('change', (e) =>{
        
        cargarSelect(selCiudades, obtenerCiudades(datos, e.target.value));
    })




});


function obtenerPaises(array){
    //Primero mapeo los paises
    //map recibe el elemento, el indice del elemento y el array
    //map devulve una columa de elementos de un array

    //Esta funcion va a mapear todo el data.js y va a devolver todos los paises y el unique va a eliminar
    //los repetidos y los va a ordenar alfabeticamente
    let paises = array.map( element => element.pais).unique().sort();
    return paises;

    
    
}

function obtenerCiudades(array, pais)
{
    //Esta funcion va a filtrar todo el data.js y va a filtrar todos los paises, el map va 
    // a traerse todas las ciudades de ese pais, el unique va a eliminar
    //los repetidos y los va a ordenar alfabeticamente
    let ciudades = array.filter(element => element.pais === pais)
        .map(element => element.ciudad)
        .unique()
        .sort();
 return ciudades;
}

function cargarSelect(select, arr){
    limpiarSelect(select);
    arr.forEach(element => {
        let opcion = document.createElement('option');
        opcion.setAttribute('value', element);
        let texto = document.createTextNode(element);
        opcion.appendChild(texto);
        select.appendChild(opcion);
    });
}

function limpiarSelect(select)
{
    //Manera like a boss
    //Esto se va a fijar que si el select tiene hijos, va a ir removieno el primero
    while(select.hasChildNodes()){
        select.remove(sel.firstElemendChild);
    }
    //Manera cabeza de limpiar el select
    //select.options.length = 0;
}