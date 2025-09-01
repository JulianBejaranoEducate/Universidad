'use strict';

//Función asíncrona para obtener y mostrar los departamentos de Colombia

async function getDepartamentos() {
    const API_URL = 'https://api-colombia.com/api/v1/Department'; // https://api-colombia.com/
    const listaDepartamentos = document.getElementById('departamentos-lista');
    const mensajeCarga = document.getElementById('loading-message');

    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status} ${respuesta.statusText}`);
        }
        const departamentos = await respuesta.json();

        mensajeCarga.style.display = 'none';
        listaDepartamentos.innerHTML = '';

        departamentos.forEach(departamento => {
            const listItem = document.createElement('li');
            listItem.textContent = `${departamento.name} - (Población: ${departamento.population.toLocaleString('es-CO')})`;
            listaDepartamentos.appendChild(listItem);
        });

    } catch (error) {
        console.error('Falló la obtención de datos:', error);
        mensajeCarga.textContent = 'No se pudieron cargar los datos. Por favor, intente más tarde.';
        mensajeCarga.style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', getDepartamentos);
