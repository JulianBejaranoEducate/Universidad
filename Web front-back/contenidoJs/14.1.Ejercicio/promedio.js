'use strict';

import { obtenerNotas } from './datos.js';

export function calcularPromedio(notas) {
    if (!notas || notas.length === 0) {
        return 0;
    }
    
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
}

export function mostrarResultado(promedio, contenedor) {
    // Remover resultado anterior si existe
    const resultadoAnterior = document.getElementById('resultado-promedio');
    if (resultadoAnterior) {
        resultadoAnterior.remove();
    }
    
    const divResultado = document.createElement('div');
    divResultado.id = 'resultado-promedio';
    divResultado.className = 'alert alert-success mt-3';
    
    let mensaje = `Promedio: ${promedio.toFixed(2)}`;
    
    // Agregar clasificación
    if (promedio >= 4.5) {
        mensaje += ' - Excelente';
    } else if (promedio >= 3.5) {
        mensaje += ' - Bueno';
    } else if (promedio >= 3.0) {
        mensaje += ' - Aceptable';
    } else {
        mensaje += ' - Necesita mejorar';
    }
    
    divResultado.textContent = mensaje;
    contenedor.appendChild(divResultado);
}

export function procesarPromedio() {
    const notas = obtenerNotas();
    
    if (notas.length === 0) {
        alert('Por favor, ingrese al menos una nota válida');
        return;
    }
    
    const promedio = calcularPromedio(notas);
    const contenedor = document.getElementById('listaNotas');
    mostrarResultado(promedio, contenedor);
    
    console.log(`Promedio calculado: ${promedio.toFixed(2)}`);
}