'use strict';

const BASE_URL = "https://pokeapi.co/api/v2/";
const listado = document.getElementById('listPoke');
// ¿Que es un fracmento? Es un mini DOM 
const fragment = new DocumentFragment();
// Consumo de API
async function obtenerListado(){
    const response = await axios.get(`${BASE_URL}pokemon`)
    .then(response => {
        const resultados = response.data.results;
        let poke = [];
        for(let i in resultados){
            poke.push(resultados[i].name);
        }
        return poke;
    })
    .catch(error => {console.log(error)})
    .finally(console.info("Se ha finalizado la ejecucion"))
    return response;

}

const dataPoke = await obtenerListado();

dataPoke.forEach(e => {
    const li = document.createElement('li');
    li.className.add('list-group-item');
    li.textContent = e;
    // Eliminando el reflow
    fragment.appendChild(li);
});
listado.appendChild(fragment);
