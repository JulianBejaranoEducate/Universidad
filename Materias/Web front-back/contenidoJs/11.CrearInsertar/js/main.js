'use strict';

/* Crear e insertar elementos del DOM 
    1. getElementById - getElementsByClassName - getElementsByTagName
    2. querySelector(#id) / querySelector(.class) - querySelectorAll(nav) - querySelectorAll(.class)
*/

const articuloPatos = document.createElement("article");

// Atributos del elemento
articuloPatos.id = "art-duck";
articuloPatos.className = "articulos";
articuloPatos.style = "color: blue; background-color: lightblue; padding: 10px; margin: 10px; border-radius: 5px;";

// Insertar p en el articulo
const parrafoPatos = document.createElement("p");
parrafoPatos.textContent = "Los patos son aves acuáticas que pertenecen a la familia Anatidae. Son conocidos por su característico pico ancho y aplanado, así como por su plumaje colorido.";

// Insertar elemento en el DOM
document.body.appendChild(articuloPatos);

// Insertar el párrafo en el artículo
articuloPatos.appendChild(parrafoPatos);

// Necesito otro parrafo pero no puedo copiarlo de forma convecional sino que tengo que hacerlo a través de la clonacion
const parrafoRoedores = parrafoPatos.cloneNode(true);
parrafoRoedores.textContent = "<i>Los roedores son un orden</i> <b> de animales de mamíferos caracterizados por sus incisivos</b> <pre>que crecen continuamente. Incluyen ratas, ratones, ardillas y castores.</pre>";

parrafoRoedores.innerHTML = "<i>Los roedores son un orden</i> <b> de animales de mamíferos caracterizados por sus incisivos</b> <pre>que crecen continuamente. Incluyen ratas, ratones, ardillas y castores.</pre>";

// Insertar el párrafo en el |rtículo
articuloPatos.appendChild(parrafoRoedores);