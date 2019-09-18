function crearTabla(arrayObjetos) {
    //Creando una tabla html desde js
    let tabla = document.createElement("table");

    tabla.setAttribute('border', '1px solid black');
    tabla.setAttribute('style', 'border-collapse:collapse');
    tabla.setAttribute('width', '700px');
    let cabecera = document.createElement("tr");
    //recorro el array del indice 0 con for in para traer todos los headers
    for (atributo in arrayObjetos[0]) {
            let th = document.createElement("th");
            th.textContent = atributo;
            cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);
    
    for(var i in arrayObjetos){
        let fila = document.createElement("tr");
        let unObjeto= arrayObjetos[i];

        for (j in unObjeto){
            let celda = document.createElement("td");
            celda.setAttribute('style', 'text-aling : center');
            let dato = document.createTextNode(unObjeto[j]);
            celda.appendChild(dato);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    return tabla;
    //console.log(tabla);

}