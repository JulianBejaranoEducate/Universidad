'use strict';
// Contadores
let contador = 0;

// Acumulador 
let edades = 0;

// Bucle
for(let i = 0; i < 3; i ++){
    let edad = prompt("Ingrese su edad"); // La función "promt" siempre devuelve el valor ingresado como string. También se puede usar parseInt(promt("Ingrese su edad")); para convertirlo a número
    edades += parseInt(edad); // Suma progresivamente un valor "edad"
    contador ++; // Cuenta cuántas edades se han ingresado
}

alert("El promedio de edades es: " + (edades/contador));