'use strict';

import { 
    validatedString, 
    validatedTelefono, 
    validarFormulario, 
    mostrarErrores, 
    limpiarErrores,
    limpiarFormulario 
} from "./validated.js";
import { modalAlerta, agregarEstudiante } from "./pintar.js";

const btnEnviar = document.querySelector("#btnEnviar");

// Función para configurar validación en tiempo real
const configurarValidacionTiempoReal = () => {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            // Solo validar si el campo tiene contenido
            if (input.value.trim() !== '') {
                const campo = input.id === 'mail' ? 'email' :
                             input.id === 'fm_contact' ? 'mensaje' :
                             input.id === 'name' ? 'nombre' :
                             input.id === 'lastName' ? 'apellido' :
                             input.id === 'telephone' ? 'telefono' : input.id;
                
                // Importar dinámicamente para evitar problemas de dependencias circulares
                import('./validated.js').then(({ validarCampo }) => {
                    const resultado = validarCampo(campo, input.value);
                    
                    // Limpiar error anterior de este campo
                    input.classList.remove('error');
                    const mensajeError = input.nextElementSibling;
                    if (mensajeError && mensajeError.classList.contains('mensaje-error')) {
                        mensajeError.remove();
                    }
                    
                    // Si hay error, mostrarlo
                    if (!resultado.valido) {
                        input.classList.add('error');
                        const errorElement = document.createElement('span');
                        errorElement.classList.add('mensaje-error');
                        errorElement.textContent = resultado.mensaje;
                        input.parentNode.insertBefore(errorElement, input.nextSibling);
                    }
                });
            }
        });
        
        // Limpiar errores cuando el usuario empiece a escribir
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                input.classList.remove('error');
                const mensajeError = input.nextElementSibling;
                if (mensajeError && mensajeError.classList.contains('mensaje-error')) {
                    mensajeError.remove();
                }
            }
        });
    });
};

// Event listener principal para el botón enviar
btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Obtener valores del formulario
    const datos = {
        nombre: document.querySelector("#name").value.trim(),
        apellido: document.querySelector("#lastName").value.trim(),
        email: document.querySelector("#mail").value.trim(),
        telefono: document.querySelector("#telephone").value.trim(),
        mensaje: document.querySelector("#fm_contact").value.trim()
    };
    
    console.log('Datos del formulario:', datos);
    
    // Validar formulario completo con las nuevas validaciones
    const resultadoValidacion = validarFormulario(datos);
    
    if (resultadoValidacion.valido) {
        // Si es válido, limpiar errores y proceder
        limpiarErrores();
        console.log('Formulario válido, procediendo...');
        agregarEstudiante(
            datos.nombre,
            datos.apellido, 
            datos.email,
            datos.telefono,
            datos.mensaje
        );
    } else {
        // Si hay errores, mostrarlos
        console.log('Errores encontrados:', resultadoValidacion.errores);
        mostrarErrores(resultadoValidacion.errores);
        modalAlerta("Por favor corrija los errores en el formulario antes de continuar", "error");
    }
});

// Inicializar validaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    configurarValidacionTiempoReal();
    console.log('Sistema de validaciones inicializado');
});





