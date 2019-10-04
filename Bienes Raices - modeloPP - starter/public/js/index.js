let frm;

window.addEventListener('load', inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];
    frm.addEventListener('submit', manejadorSubmit);
    //document.getElementById("btnBorrar").addEventListener('click', borrarAnuncio);
}

function manejadorSubmit(e) {
    e.preventDefault();
    let nuevoAnuncio = obtenerAnuncio(e.target, false);
    altaAnuncio(nuevoAnuncio);
}

function manejadorModificar(e) {
    e.preventDefault();
    let anuncio = obtenerAnuncio(e.target, true);
    modificarPersona(anuncio);
}

function obtenerAnuncio(frm, tieneId) {
    let titulo;
    let descripcion;
    let precio;
    let num_wc;
    let num_estacionamiento;
    let num_dormitorio;
    let transaccion;
    let id = -1;
    for (element of frm.elements) {
        switch (element.name) {
            case "titulo":
                titulo = element.value;
                break;
            case "descripcion":
                descripcion = element.value;
                break;
            case "precio":
                precio = element.value;
                break;
            case "num_wc":
                num_wc = element.value;
                break;
            case "num_estacionamiento":
                num_estacionamiento = element.value;
                break;
            case "num_dormitorio":
                num_dormitorio = element.value;
                break;
                case "transaccion":
                    transaccion = element.value;
                    break;
            case "id":
                if (tieneId == true) {
                    id = element.value;
                } else {
                    id = -1;
                }
                break;
        }
    }
     return new Anuncio(titulo,descripcion,precio,transaccion,num_wc,num_estacionamiento,num_dormitorio);

}

function altaAnuncio(nuevoAnuncio)
{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        if(this.readyState == 4 && this.status == 200){
            console.log("lleguo alta anuncio");
            armarTabla();
        }
    }
    xhr.open('POST', 'http://localhost:3000/altaAnuncio', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(nuevoAnuncio));
}
 function traerAnuncios()
 {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log("llego traer anuncios")
            return JSON.parse(xhr.responseText());
        }
    }
    xhr.open('GET', "http://localhost:3000//traerAnuncios", true);
    xhr.send();

 }

 function armarTabla()
 {
     let objetos = traerAnuncios();
     console.log("llego armar tabla");
     document.getElementById("divTabla").appendChild(crearTabla(objetos));
 }