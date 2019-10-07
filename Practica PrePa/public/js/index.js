let frm;

window.addEventListener('load', inicializar);

function inicializar(e) {
    e.preventDefault();
    frm = document.forms[0];
    frm.addEventListener('submit', manejadorSubmit);
    cargarTabla();
}

function manejadorSubmit(e) {
    e.preventDefault();
    let nuevoAnuncio = obtenerAnuncio(e.target, false);
    //console.log(nuevoAnuncio);
    altaAnuncio(nuevoAnuncio);
    document.getElementById("btnBorrar").addEventListener('click', borrarAnuncio);
}
function manejadorModificar(e) {
    e.preventDefault();
    let anuncio = obtenerAnuncio(e.target, true);
    modificarAnuncio(anuncio);
}
function cargarTabla() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let objetos = JSON.parse(xhr.responseText);
            document.getElementById('divTabla').innerText = "";
            document.getElementById("divTabla").appendChild(crearTabla(objetos.data));
            let tds = document.getElementsByTagName("td");
            for (var i = 0; i < tds.length; i++) {
                let td = tds[i];
                td.addEventListener('click', setValues)
            }
        }
    }
    xhr.open("GET", "http://localhost:3000/traerAnuncios", true);
    xhr.send();
}

function altaAnuncio(nuevoAnuncio) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
            cargarTabla();
        }
    }
    xhr.open("POST", "http://localhost:3000/altaAnuncio", true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(nuevoAnuncio));
}
function obtenerId(frm)
{
    for (element of frm.elements) {
        if (element.id === "idAnuncio") {
            return `id=${element.value}`;
        }
    } 
}

function obtenerAnuncio(frm, tieneId) {
    let titulo;
    let descripcion;
    let transaccion;
    let precio;
    let num_wc
    let num_estacionamiento;
    let num_dormitorio;
    let id;
    for (let element of frm.elements) {
        switch (element.name) {
            case "titulo":
                titulo = element.value;
            case "descripcion":
                descripcion = element.value;
            case "precio":
                precio = element.value;
            case "num_wc":
                num_wc = element.value;
            case "num_estacionamiento":
                num_estacionamiento = element.value;
            case "num_dormitorio":
                num_dormitorio = element.value;
            case "id":
                if (tieneId === true) {
                    id = element.value;
                }
                else {
                    id = -1;
                }
            case "transaccion":
                if (element.checked === true) {
                    transaccion = element.value;
                }
        }
    }
    return new Anuncio(id, titulo, descripcion, precio, num_wc, num_dormitorio, num_estacionamiento, transaccion);

}
function modificarAnuncio(anuncio) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cargarTabla();
            limpiarValues();
            frm.removeEventListener('submit', manejadorModificar);
            frm.addEventListener('submit', manejadorSubmit);
        }
    }
    xhr.open('POST', 'http://localhost:3000/modificarAnuncio', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    anuncio.active = true;
    xhr.send(JSON.stringify(anuncio));
}

function setValues(e){
    let tr = e.target.parentElement ;
    let nodos = tr.childNodes;
    
    document.getElementById("idAnuncio").value = nodos[0].innerText;
    document.getElementById("idAnuncio").hidden = false;

    document.getElementById("lblId").hidden = false;
    document.getElementById("titulo").value = nodos[1].innerText;
    if (nodos[2].innerHTML == "Venta") {
        document.getElementById("transaccionVenta").checked = true;
    } else {
        document.getElementById("transaccionAlquiler").checked = true;
    }
    document.getElementById("descripcion").value = nodos[3].innerText;
    document.getElementById("precio").value = nodos[4].innerText;
    document.getElementById("num_wc").value = nodos[5].innerText;
    document.getElementById("num_estacionamiento").value = nodos[6].innerText;
    document.getElementById("num_dormitorio").value = nodos[7].innerText;

    document.getElementById("btnCrearOModificar").innerText = "Modificar";
    document.getElementById("btnBorrar").hidden = false;
    frm.removeEventListener('submit', manejadorSubmit);
    frm.addEventListener('submit', manejadorModificar);

}

function limpiarValues() {
    document.getElementById("idAnuncio").value = "";
    document.getElementById("idAnuncio").hidden = true;

    document.getElementById("lblId").hidden = true;
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("num_wc").value = "";
    document.getElementById("num_dormitorio").value = "";
    document.getElementById("num_estacionamiento").value = "";
    document.getElementById("transaccionVenta").checked = false;
    document.getElementById("transaccionAlquiler").checked = false;


    document.getElementById("btnCrearOModificar").innerText = "Crear";
    document.getElementById("btnBorrar").hidden = true;


}

function borrarAnuncio() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cargarTabla();
            limpiarValues();
            frm.removeEventListener('submit', manejadorModificar);
            frm.addEventListener('submit', manejadorSubmit);
        }
    }
    xhr.open('POST', 'http://localhost:3000/bajaAnuncio', true);
    xhr.setRequestHeader('Content-type', 'Application/x-www-form-urlencoded');
    xhr.send(obtenerId(frm));
}
