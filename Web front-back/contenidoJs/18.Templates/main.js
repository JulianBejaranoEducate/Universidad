'use strict';

const BASE_URL = "https://pokeapi.co/api/v2/";
const fragment = new DocumentFragment();
const newFragment = new DocumentFragment();
const listado = document.getElementById('listPoke');
const template = document.getElementById('template').content;

// 1. Obtener listado de URLs de Pokémon
async function obtenerListado() {
    const response = await axios.get(`${BASE_URL}pokemon`)
        .then(response => {
            const resultados = response.data.results;
            let poke = [];
            for (let i in resultados) {
                poke.push(resultados[i].url); // Guardar URL real
            }
            return poke;
        })
        .catch(error => { console.log(error) })
        .finally(() => console.info("Se ha finalizado la ejecución"));
    return response;
}

// 2. Obtener y mostrar detalles de un Pokémon
async function detallesPokemons(url) {
    const respuesta = await axios.get(url)
        .then(respuesta => {
            const pokemon = respuesta.data;
            const detalles = {
                nombre: pokemon.name,
                altura: pokemon.height,
                peso: pokemon.weight,
                imagen: pokemon.sprites.other["official-artwork"].front_default,
                habilidades: pokemon.abilities.map(item => item.ability.name)
            }
            console.log(detalles);
            mostrarDetalles(detalles);
        })
        .catch(error => { console.log(error) })
        .finally(() => console.info("Se ha finalizado la ejecución de los detalles"));
    return respuesta;
}

// 3. Mostrar listado en pantalla
const dataPoke = await obtenerListado();
const okTemplate = "content" in document.createElement("template");

if (okTemplate) {
    dataPoke.forEach(element => {
        template.querySelector("a").textContent = element; // Nombre del Pokémon
        template.querySelector("a").setAttribute("href", element);
        template.querySelector("a").dataset.url = element; // Guardar la URL como atributo
        const myElement = template.cloneNode(true);
        fragment.appendChild(myElement);
    });
} else {
    dataPoke.forEach(element => {
        const li = document.createElement("li");
        li.classList.add('list-group-item');
        li.innerHTML = `<strong>${element}</strong>`;
        fragment.appendChild(li);
    });
}

listado.appendChild(fragment);

// 4. Función para mostrar detalles usando template
function mostrarDetalles(detalles) {
    // Limpiar el contenedor de detalles anterior
    const oldDetails = document.querySelector('.pokemon-details');
    if (oldDetails) {
        oldDetails.remove();
    }+

    // Obtiene el template
    const newTemplate = document.getElementById('nuevo-template').content;
    
    // Clonar el template
    const clone = newTemplate.cloneNode(true);
    
    clone.querySelector('.nombre').textContent = `Nombre: ${detalles.nombre.toUpperCase()}`;
    clone.querySelector('.altura').textContent = `Altura: ${detalles.altura / 10} m`;
    clone.querySelector('.peso').textContent = `Peso: ${detalles.peso / 10} kg`;
    clone.querySelector('.habilidades').textContent = `Habilidades: ${detalles.habilidades.join(', ')}`;
    clone.querySelector('.imagen').src = detalles.imagen;
    clone.querySelector('.imagen').alt = detalles.nombre;
    
    clone.querySelector('div').classList.add('pokemon-details');
    
    listado.insertAdjacentElement("afterend", clone.querySelector('div'));
}

// 5. Asignar evento click a cada enlace
document.querySelectorAll('#listPoke a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const url = this.dataset.url;
        detallesPokemons(url);
    });
});