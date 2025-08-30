'use strict';

const btnOK = document.getElementById('ok');
const listaNotas = document.getElementById('listaNotas');

// Crear Boton
const btnPromedio = document.createElement('button');
// Propiedades al boton
btnPromedio.type = "button";
btnPromedio.textContent = "Promedio";
btnPromedio.className = "btn btn-info";

// Asociamos un evento click al btnOK
btnOK.addEventListener('click', () => {
    let cantNotas = parseInt(document.getElementById('cantNotas').value);

    // Validaciones, deben estar entre 0 y 5, que sea numerico -> casteo -> isNaN
    for(let i = 0; i < cantNotas; i ++){
        const div = document.createElement('div');
        div.className = "col-md-2 col-sm-12";
        const input = document.createElement('input');
        // Otra forma de agingar las propiedades
        input.setAttribute('type', 'number');
        input.setAttribute('id', 'nota');
        input.max = 5;
        input.min = 0;
        input.step = 0.1;
        input.className = "form-control";
        div.appendChild(input);
        listaNotas.appendChild(div);
    }
    listaNotas.appendChild(btnPromedio);
});

btnPromedio.onclick = function(){
    let arrayInpunt = document.querySelectorAll('#nota');
    let promedio = 0;
    // Tambien se puede con el .map
    arrayInpunt.forEach(e => {
        if(parseFloat(e.value)){
            promedio += parseFloat(e.value);        
        }
    });
    promedio = promedio / arrayInpunt.length;

    // Pintar en pantalla o en el DOM el resultado
    console.log(promedio);
}