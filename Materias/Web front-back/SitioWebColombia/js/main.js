'use strict';

/**
 * Función asíncrona para obtener y mostrar los departamentos de Colombia.
 */
async function obtenerYMostrarDepartamentos() {
    // La URL del endpoint de la API que vamos a consumir.
    const API_URL = 'https://api-colombia.com/api/v1/Department';

    // Obtenemos las referencias a los elementos del DOM donde mostraremos los datos y mensajes.
    const listaDepartamentos = document.getElementById('departamentos-lista');
    const mensajeCarga = document.getElementById('loading-message');

    try {
        // 1. Realizar la petición HTTP usando fetch. `await` pausa la ejecución
        //    hasta que la promesa de fetch se resuelva.
        const respuesta = await fetch(API_URL);

        // 2. Verificar si la respuesta fue exitosa (código de estado 200-299).
        if (!respuesta.ok) {
            // Si no fue exitosa, lanzamos un error para que sea capturado por el bloque catch.
            throw new Error(`Error en la petición: ${respuesta.status} ${respuesta.statusText}`);
        }

        // 3. Procesar la respuesta JSON. `await` espera a que el cuerpo de la
        //    respuesta se convierta en un objeto JavaScript.
        const departamentos = await respuesta.json();

        // Ocultamos el mensaje de "Cargando...".
        mensajeCarga.style.display = 'none';

        // 4. Mostrar los datos en el HTML.
        // Limpiamos cualquier contenido previo que pudiera tener la lista.
        listaDepartamentos.innerHTML = '';

        // Recorremos el array de departamentos que recibimos de la API.
        departamentos.forEach(departamento => {
            // Por cada departamento, creamos un elemento de lista <li>.
            const listItem = document.createElement('li');
            // Asignamos el nombre del departamento al texto del elemento.
            listItem.textContent = `${departamento.name} - (Población: ${departamento.population.toLocaleString('es-CO')})`;
            // Añadimos el <li> a nuestra lista <ul> en el HTML.
            listaDepartamentos.appendChild(listItem);
        });

    } catch (error) {
        // Si ocurre cualquier error en el bloque `try`, lo capturamos aquí.
        console.error('Falló la obtención de datos:', error);
        // Mostramos un mensaje de error al usuario.
        mensajeCarga.textContent = 'No se pudieron cargar los datos. Por favor, intente más tarde.';
        mensajeCarga.style.color = 'red';
    }
}

// Nos aseguramos de que el DOM esté completamente cargado antes de ejecutar nuestro script.
document.addEventListener('DOMContentLoaded', obtenerYMostrarDepartamentos);
