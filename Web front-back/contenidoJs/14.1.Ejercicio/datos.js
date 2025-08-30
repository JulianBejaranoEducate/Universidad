'use strict';

export function validarCantidadNotas(cantidad) {
    const cantNotas = parseInt(cantidad);
    return !isNaN(cantNotas) && cantNotas > 0 && cantNotas <= 20;
}

export function validarNota(nota) {
    const notaNum = parseFloat(nota);
    return !isNaN(notaNum) && notaNum >= 0 && notaNum <= 5;
}

export function obtenerNotas() {
    const inputs = document.querySelectorAll('input[data-nota]');
    const notas = [];
    
    inputs.forEach(input => {
        const valor = parseFloat(input.value);
        if (validarNota(valor)) {
            notas.push(valor);
        }
    });
    
    return notas;
}

// export{ as };