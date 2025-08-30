'use strict';

/* Seleccionar elementos del DOM 
    1. getElementById - getElementsByClassName - getElementsByTagName
    2. querySelector(#id) / querySelector(.class) - querySelectorAll(nav) - querySelectorAll(.class)
*/

let titulo = document.getElementsByTagName("h1");
console.log(titulo); // Devuelve una colección HTMLCollection de elementos h1

let tituloQuery = document.querySelector("h1");
console.log(tituloQuery); // Devuelve el primer elemento h1

const menu = document.getElementsById("menu");
const menu2 = document.querySelector("#menu");
console.log(menu); // Devuelve 

const secciones = document.getElementsByClassName("seccion");
const seccionesQuery = document.querySelectorAll(".seccion");