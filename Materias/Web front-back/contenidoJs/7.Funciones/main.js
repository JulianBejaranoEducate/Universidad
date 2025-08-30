'use strict';
//Funciones anonimas y autoinvocables

(() => {
    alert("Hola, soy una funcion anonima autoinvocada");
})();

(function(){
    console.log("Esta es otra funcion anonima autoinvocada");
})();

// Funcion anonima cuando se asigna a una variable o no es autoinvocada
const funcionAnonima = function(nombre){
    console.log("Hola estudiante " + nombre);
}
funcionAnonima("Natalia");

// Funcion anonima cuando se asigna a una variable o no es autoinvocada tipo flecha
const funcionAnonimaFlecha = (nombre) => {
    console.log("Hola estudiante " + nombre);
}
funcionAnonimaFlecha("David");