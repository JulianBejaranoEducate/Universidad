'use strict';

// Expresiones regulares para validaciones
const REGEX_PATTERNS = {
    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
    apellido: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    telefono: /^\+?[0-9]{7,15}$/,
    mensaje: /^.{10,500}$/
};

// Diccionario de países por prefijo internacional
const PREFIJOS_PAISES = {
    "+57": "Colombia",
    "+1": "Estados Unidos",
    "+34": "España",
    "+52": "México",
    "+54": "Argentina",
    "+55": "Brasil",
    "+44": "Reino Unido",
    "+49": "Alemania",
    "+33": "Francia"
};

// Mensajes de error personalizados en formato JSON
const MENSAJES_ERROR = {
    nombre: {
        vacio: "El nombre es obligatorio",
        invalido: "El nombre solo puede contener letras y espacios (2-50 caracteres)",
        completado: "El dato es valido"
    },
    apellido: {
        vacio: "El apellido es obligatorio",
        invalido: "El apellido solo puede contener letras y espacios (2-50 caracteres)"
    },
    email: {
        vacio: "El correo electrónico es obligatorio",
        invalido: "Ejemplo: 'example@correo.com'"
    },
    telefono: {
        vacio: "El teléfono es obligatorio",
        invalido: "El teléfono debe contener entre 7 y 10 dígitos"
    },
    mensaje: {
        vacio: "El mensaje es obligatorio",
        invalido: "El mensaje debe tener entre 10 y 500 caracteres"
    }
};



// Función para validar un campo específico
const validarCampo = (campo, valor) => {
    // Verificar si el campo está vacío
    if (!valor || valor.trim() === '') { // .trim elimina los espacios en blanco al inicio y al final
        return {
            valido: false,
            mensaje: MENSAJES_ERROR[campo].vacio
        };
    }
    
    // Validar con expresión regular
    if (!REGEX_PATTERNS[campo].test(valor.trim())) {
        return {
            valido: false,
            mensaje: MENSAJES_ERROR[campo].invalido
        };
    }

    // Validación especial para teléfono: identificar país
    if (campo === "telefono") {
        let paisDetectado = null;
        for (const prefijo in PREFIJOS_PAISES) {
            if (valor.startsWith(prefijo)) {
                paisDetectado = PREFIJOS_PAISES[prefijo];
                break;
            }
        }

        if (paisDetectado) {
            return {
                valido: true,
                mensaje: `Número válido. Detectado: ${paisDetectado}`
            };
        }
    }

    return {
        valido: true,
        mensaje: "Campo Valido"
    };
};

// Función para validar todos los campos del formulario
const validarFormulario = (datos) => {
    const errores = {};
    let formularioValido = true;

    // Validar cada campo
    Object.keys(datos).forEach(campo => {
        const resultado = validarCampo(campo, datos[campo]);
        if (!resultado.valido) {
            errores[campo] = resultado.mensaje;
            formularioValido = false;
        }
    });

    return {
        valido: formularioValido,
        errores: errores
    };
};

// Función para mostrar errores en el formulario
const mostrarErrores = (errores) => {
    // Limpiar errores anteriores
    limpiarErrores();

    Object.keys(errores).forEach(campo => {
        const campoId = campo === 'email' ? 'mail' : 
                       campo === 'mensaje' ? 'fm_contact' :
                       campo === 'nombre' ? 'name' :
                       campo === 'apellido' ? 'lastName' : 
                       campo === 'telefono' ? 'telephone' : campo;
        
        const input = document.getElementById(campoId);
        if (input) {
            // Agregar clase de error al input
            input.classList.add('error');
            
            // Crear elemento de error
            const errorElement = document.createElement('span');
            errorElement.classList.add('mensaje-error');
            errorElement.textContent = errores[campo];
            
            // Insertar el mensaje después del input
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
    });
};

// Función para limpiar errores anteriores
const limpiarErrores = () => {
    // Remover clases de error
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.classList.remove('error');
    });

    // Remover mensajes de error
    const mensajesError = document.querySelectorAll('.mensaje-error');
    mensajesError.forEach(mensaje => mensaje.remove());
};

// Función para limpiar el formulario
const limpiarFormulario = () => {
    document.getElementById('name').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('telephone').value = '';
    document.getElementById('fm_contact').value = '';
    limpiarErrores();
};

// Funciones de compatibilidad con el código existente
const validatedString = (cad) => {
    return cad && cad.trim().length >= 3;
};

const validatedTelefono = (cad) => {
    return REGEX_PATTERNS.telefono.test(cad);
};

export { 
    validatedString, 
    validatedTelefono, 
    validarCampo, 
    validarFormulario, 
    mostrarErrores, 
    limpiarErrores, 
    limpiarFormulario,
    REGEX_PATTERNS,
    MENSAJES_ERROR
};