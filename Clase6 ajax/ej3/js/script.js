window.addEventListener('load', () => {
    document.getElementById('btnTraer').addEventListener('click', traerTexto);

});

function traerTexto() {
    //peticion
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        // aca va el codigo que maneja la peticion
        let info = document.getElementById('info');
        if (xhr.readyState == 4) { // peticion finalizada, tiene 5 pasos (0 a 4)
            if (xhr.status == 200) // la peticiion fue correcta, salio todo ok
            {
                //Demora para mostrar el spinner
                setTimeout(() => {
                    let lista = JSON.parse(xhr.responseText);
                    info.innerHTML = "";
                    for (persona of lista) {
                        info.innerHTML += `${persona.id} ${persona.nombre} ${persona.email} ${persona.genero} <hr/>`;
                    }
                    clearTimeout(tiempo);
                }, 3000);
            } else {
                console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
            }

        } else {
            info.innerHTML = '<img src="./images/spinner.gif" alt= "spinner">';
        }
    }
    xhr.open('GET', "./persona.json", true); //abrimos conexion servidor
    xhr.send(); //enviamos peticion
    var tiempo = setTimeout(() => {
        xhr.abort();
        info.innerHTML = 'Servidor ocupado. Intente mas tarde';
    }, 5000);
}