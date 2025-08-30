'use strict';

export function crearInputNota(indice) {
    const div = document.createElement('div');
    div.className = "col-md-6 col-sm-12 mb-2";
    
    const label = document.createElement('label');
    label.textContent = `Nota ${indice + 1}:`;
    label.className = "form-label";
    
    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('data-nota', 'true');
    input.max = 5;
    input.min = 0;
    input.step = 0.1;
    input.className = "form-control";
    input.placeholder = "Ingrese nota (0-5)";
    
    div.appendChild(label);
    div.appendChild(input);
    
    return div;
}

export function insertarInputsNotas(cantNotas, contenedor) {
    // Limpiar contenedor
    contenedor.innerHTML = '';
    
    for(let i = 0; i < cantNotas; i++){
        const divNota = crearInputNota(i);
        contenedor.appendChild(divNota);
    }
}

export function crearBotonPromedio() {
    const btnPromedio = document.createElement('button');
    btnPromedio.type = 'button';
    btnPromedio.textContent = 'Calcular Promedio';
    btnPromedio.className = 'btn btn-info mt-3';
    btnPromedio.id = 'btnPromedio';
    
    return btnPromedio;
}