const buscador = document.querySelector("#buscador");
const resultado = document.querySelector('#resultado');
const elementoSeleccionado = document.querySelector('#listTipo');
var inputElement = document.getElementById("inputField");
const lotes = [
        // { lote: "00001", numslrg: "SLRG001", numcufe: "1", nombreslrg: 'Consulta de Contribuyente Ãšnico', modulo: 'Contribuyente Ãšnico' },
        // { lote: "00001", numslrg: 'SLRG002', numcufe: "2", nombreslrg: 'Alta de Contribuyente Ãšnico', modulo: 'Contribuyente Ãšnico' },
        // { lote: "00002", numslrg: 'SLRG123', numcufe: "3", nombreslrg: 'ModificaciÃ³n de Contribuyente Ãšnico', modulo: 'Contribuyente Ãšnico' },
        // { lote: "00011", numslrg: 'SLRG010', numcufe: "144", nombreslrg: 'Alta conceptos resoluciÃ³n impuestos', modulo: 'Plan de Facilidades' },
        // { lote: "00011", numslrg: 'SLRG011', numcufe: "177", nombreslrg: 'ModificaciÃ³n conceptos resoluciÃ³n impuestos', modulo: 'Plan de Facilidades' },
        // { lote: "00011", numslrg: 'SLRG012', numcufe: "174", nombreslrg: 'Consulta concepto resoluciÃ³n impuesto', modulo: 'Plan de Facilidades' },
        // { lote: "00144", numslrg: 'SLRG013', numcufe: "191", nombreslrg: 'Consulta al PadrÃ³n de Plan de Facilidades', modulo: 'Plan de Facilidades' },
    ]
    //Manejador de eventos que a medida que se completa el buscador va llamando a Filtrar
    //inputElement.addEventListener("change", handleFiles, false);
elementoSeleccionado.addEventListener('onchange', filtrar);
buscador.addEventListener('keyup', filtrar);

function filtrar() {
    //console.log(elementoSeleccionado.value);
    const texto = buscador.value.toLowerCase();
    resultado.innerHTML = "";
    //TESTINGconsole.log("LOTE" + '\t'+ "NUM SLRG" + '\t'+ "CUFE" + '\t'+ "DESC." + '\t\t\t\t\t\t\t\t\t'+ "Modulo");

    for (let lotecito of lotes) {
        let lote = lotecito.lote.toLowerCase();
        let numslrg = lotecito.numslrg.toLowerCase();
        let numcufe = lotecito.numcufe.toLowerCase();
        let nombreslrg = lotecito.nombreslrg.toLowerCase();
        console.log(elementoSeleccionado.value)
        switch (elementoSeleccionado.value) {
            case 'cufe':
                if (numcufe.indexOf(texto) !== -1) {
                    resultado.innerHTML += `<li>${lotecito.lote} - ${lotecito.numslrg} - ${lotecito.numcufe} - ${lotecito.nombreslrg} - ${lotecito.modulo}</li>`
                        //TESTINGconsole.log(lotecito.lote + '\t'+ lotecito.numslrg + '\t\t'+ lotecito.numcufe + '\t'+ lotecito.nombreslrg + '\t\t'+ lotecito.modulo);
                }
                break;
            case 'numslrg':
                if (numslrg.indexOf(texto) !== -1) {
                    resultado.innerHTML += `<li>${lotecito.lote} - ${lotecito.numslrg} - ${lotecito.numcufe} - ${lotecito.nombreslrg} - ${lotecito.modulo}</li>`
                        //TESTINGconsole.log(lotecito.lote + '\t'+ lotecito.numslrg + '\t\t'+ lotecito.numcufe + '\t'+ lotecito.nombreslrg + '\t\t'+ lotecito.modulo);
                }
                break;
            case 'nombreslrg':
                if (nombreslrg.indexOf(texto) !== -1) {
                    resultado.innerHTML += `<li>${lotecito.lote} - ${lotecito.numslrg} - ${lotecito.numcufe} - ${lotecito.nombreslrg} - ${lotecito.modulo}</li>`
                        //TESTINGconsole.log(lotecito.lote + '\t'+ lotecito.numslrg + '\t\t'+ lotecito.numcufe + '\t'+ lotecito.nombreslrg + '\t\t'+ lotecito.modulo);
                }
                break;
            case 'lote':
                if (lote.localeCompare(texto) === 0) {
                    resultado.innerHTML += `<li>${lotecito.lote} - ${lotecito.numslrg} - ${lotecito.numcufe} - ${lotecito.nombreslrg} - ${lotecito.modulo}</li>`
                        //TESTINGconsole.log(lotecito.lote + '\t'+ lotecito.numslrg + '\t\t'+ lotecito.numcufe + '\t'+ lotecito.nombreslrg + '\t\t'+ lotecito.modulo);
                }
                break;
            default:
                resultado.innerHTML += `<li>${lotecito.lote} - ${lotecito.numslrg} - ${lotecito.numcufe} - ${lotecito.nombreslrg} - ${lotecito.modulo}</li>`;
                break;

        }

    }
}