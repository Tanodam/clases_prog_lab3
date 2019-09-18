var form;
window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    form = document.forms[0];
    form.addEventListener("submit", manejadorSubmit);
}
// en el 'e' vienen datos del evento, util para romper el evento
// envio de un submit
function manejadorSubmit(e) {
    //El intelissense no funciona
    //Asi desactivo el evio de la informacion del boton s 
    e.preventDefault();
    let nuevaMascota = obtenerMascota(e.target);
    //console.log(nuevaMascota);
    mascotas.push(nuevaMascota);
    //console.log(mascotas);
    let tabla = crearTabla(mascotas);
    document.getElementById("divTabla").innerHTML = "";
    document.getElementById("divTabla").appendChild(crearTabla(mascotas));

}


function obtenerMascota(form) {
    //Nueva manera de obtener datos de un form HTML
    
    let nombre;
    let edad;
    let tipo;
    let castrado;
    let vacunado;
    let desparasitado;
    let alimento;
    //for in devuelve clave de un objeto de un array
    //for of devuelbe el valor de un objeto de un array
    for (elemento of form.elements) {
        switch (elemento.name) {
            case "nombre":
                nombre = elemento.value;
                break;
            case "edad":
                edad = parseInt(elemento.value);
                break;
            case "tipo":
                if(elemento.checked)
                {
                    tipo = elemento.value;
                }
                break;
            case "castrado":
                castrado = elemento.checked;
                break;
            case "vacunado":
                vacunado = elemento.checked;
                break;
            case "desparasitado":
                desparasitado = elemento.checked;
                break;
            case "alimento":
                alimento = elemento.value;
                break;
        }
    }
    return new Mascota(nombre, edad, tipo, castrado, vacunado, desparasitado, alimento)
}