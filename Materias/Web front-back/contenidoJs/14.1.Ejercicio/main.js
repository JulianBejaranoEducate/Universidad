'use strict';

import { validarCantidadNotas } from './datos.js';
import { insertarInputsNotas, crearBotonPromedio } from './insercion.js';
import { procesarPromedio } from './promedio.js';

class GestorNotas {
    constructor() {
        this.btnOK = document.getElementById('ok');
        this.listaNotas = document.getElementById('listaNotas');
        this.btnPromedio = null;
        
        this.inicializar();
    }
    
    inicializar() {
        this.btnOK.addEventListener('click', () => this.manejarCrearInputs());
    }
    
    manejarCrearInputs() {
        const cantidadInput = document.getElementById('cantNotas').value;
        
        if (!validarCantidadNotas(cantidadInput)) {
            alert('Por favor, ingrese una cantidad válida de notas (1-20)');
            return;
        }
        
        const cantNotas = parseInt(cantidadInput);
        
        // Insertar inputs para las notas
        insertarInputsNotas(cantNotas, this.listaNotas);
        
        // Crear y agregar botón de promedio si no existe
        if (!this.btnPromedio) {
            this.btnPromedio = crearBotonPromedio();
            this.btnPromedio.addEventListener('click', procesarPromedio);
        }
        
        this.listaNotas.appendChild(this.btnPromedio);
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new GestorNotas();
});