"use strict";

const BASE_URL = "https://pokeapi.co/api/v2/";
// ¿Que es un fracmento? Es un mini DOM
const fragment = new DocumentFragment();
const listado = document.getElementById("listPoke");
const template = document.getElementById("template").content;
const detailContainer = document.getElementById("detail");
const detailTemplate = document.getElementById("template-detail")?.content;
// Consumo de API
async function obtenerListado() {
    const response = await axios.get(`${BASE_URL}pokemon`)
        .then(response => {
            const resultados = response.data.results;
            let poke = [];
            for (let i in resultados) {
                poke.push(resultados[i].url);
            }
            return poke;
        })
        .catch(error => { console.log(error) })
        .finally(console.info("Se ha finalizado la ejecucion"))
    return response;

}

const dataPoke = await obtenerListado();
// Comprobar que el navegador soporta el template
const okTemplate = "content" in document.createElement("template");
if (okTemplate) {
    dataPoke.forEach((element) => {
        template.querySelector("a").textContent = element;
        template.querySelector("a").setAttribute("href", element);
        const myElement = template.cloneNode(true);
        fragment.appendChild(myElement);
    });
}else{
    dataPoke.forEach(element => {
        const li = document.createElement("li");
        li.classList.add('list-group-item');
        li.innerHTML = `<strong>${element}</strong>`
        fragment.appendChild(li);
    });
}


listado.appendChild(fragment);

// Delegación de eventos: intercepta clicks en los links de pokémon
listado.addEventListener("click", async (e) => {
    const anchor = e.target.closest("a");
    if (!anchor) return;
    e.preventDefault();
    const url = anchor.getAttribute("href");
    await mostrarDetalle(url);
    // Desplaza hacia el contenedor de detalle para mejor UX
    detailContainer?.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Obtiene los datos del Pokémon y renderiza el detalle requerido
async function mostrarDetalle(url) {
    try {
        const { data } = await axios.get(url);
        const nombre = data.name; // string
        const altura = data.height; // en decímetros
        const peso = data.weight; // en hectogramos
        // habilidades: array de objetos { ability: { name, url } }
        const habilidades = data.abilities?.map((a) => a.ability?.name).filter(Boolean) || [];

        // Imagen: preferimos official artwork si existe; si no, dream_world o front_default
        const sprites = data.sprites || {};
        const imgUrl = sprites.other?.["official-artwork"]?.front_default
            || sprites.other?.dream_world?.front_default
            || sprites.front_default
            || "";

        renderDetalle({ nombre, altura, peso, habilidades, imgUrl });
    } catch (error) {
        console.error(error);
        detailContainer.innerHTML = `<div class="alert alert-danger">No se pudo cargar el detalle del Pokémon.</div>`;
    }
}

function renderDetalle({ nombre, altura, peso, habilidades, imgUrl }) {
    if (!detailTemplate) return;
    // Limpia el contenedor
    detailContainer.innerHTML = "";
    const node = detailTemplate.cloneNode(true);
    node.querySelector(".name").textContent = nombre;
    node.querySelector(".height").textContent = `${altura} dm`;
    node.querySelector(".weight").textContent = `${peso} hg`;
    node.querySelector(".abilities").textContent = habilidades.join(", ");
    const img = node.querySelector("img");
    if (imgUrl) {
        img.setAttribute("src", imgUrl);
    } else {
        img.setAttribute("alt", "Imagen no disponible");
    }
    detailContainer.appendChild(node);
}

// 5. Asignar evento click a cada enlace
document.querySelectorAll('#listPoke a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const url = this.dataset.url;
        detallesPokemons(url);
    });
});