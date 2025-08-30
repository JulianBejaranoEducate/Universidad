'use strict';

const BASE_URL = "https://pokeapi.co/api/v2/";
const fragment = new DocumentFragment();
const newFragment = new DocumentFragment();
const listado = document.getElementById('listPoke');
const template = document.getElementById('template').content;
const newTemplate = document.getElementById('nuevo-template').content;

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

// 4. Mostrar detalles en pantalla
function mostrarDetalles(detalle) {
    const limpiarDetalles = document.querySelector('.pokemon-details');
    if (limpiarDetalles) {
        limpiarDetalles.remove();
    }

    const nuevoElemento = newTemplate.cloneNode(true);

    nuevoElemento.querySelector('nombre').textContent = `Nombre: ${detalle.nombre}`
    nuevoElemento.querySelector('altura').textContent = `Altura: ${detalle.altura} m`
    nuevoElemento.querySelector('peso').textContent = `Peso: ${detalle.peso} kg`
    nuevoElemento.querySelector('habilidades').textContent = `Habilidades ${detalle.habilidades. join}`
    nuevoElemento.querySelector('.imagen').src = detalle.imagen;
    nuevoElemento.querySelector('.imagen').alt = detalle.nombre;


    clone.querySelector('div').classList.add('pokemon-details');

    listado.insertAdjacentElement("afterend", clone.querySelector('div'));
}


// 5. Asignar evento click a cada enlace
document.querySelectorAll('#listPoke a').forEach(link => {
    link.addEventListener('click', function(elemento) {
        elemento.preventDefault();
        const url = this.dataset.url;
        detallesPokemons(url);
    });
});