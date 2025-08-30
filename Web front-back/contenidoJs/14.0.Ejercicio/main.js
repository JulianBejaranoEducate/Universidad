'use strict';

// Evento clic desde el html
function notasPromedio(){
    cuerpoPromedio();
}

// Mediante la propiedad
const btnPropiedad = document.getElementById('btn3Promedio');
btnPropiedad.onclick = function(){/*Funcion clacia y anonima*/
    cuerpoPromedio();
};

// Metodo .addEventListener
const btnAddEvenL = document.querySelector('#btnPromedio');
btnAddEvenL.addEventListener('click', function(){
    cuerpoPromedio();
});

// Metodo para el calculo del promedio
const cuerpoPromedio = () => {
    let canNotas = prompt("introduzca la cantidad de notas:");
    // Debería haber un ciclo
    try {
        if(!isNaN(parseInt(canNotas))){
            let nota = 0;
            let acumuladorNotas = 0;
            for(let i = 0; i < canNotas; i ++){
                nota = prompt("Introduzca la nota");
                acumuladorNotas += (parseFloat(nota));
            }
            let promedio = acumuladorNotas / canNotas;
            alert("El promedio es:" + promedio.toFixed(1));
        }else{
            alert("Valor invalido");
        }
    } catch (error) {
        alert("Error en datos");
        console.log(error);
    }
};