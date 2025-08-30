'use strict';

// Metodos de arreglos

// filter
const numeros = [1, 2, 3, 4, 5, 6];
let pares = numeros.filter((numero) => numero % 2 === 0);
console.log("Pares:", pares);

// map
let multiplicar = numeros.map((numero) => numero * 2);
console.log("Resultador de multiplicar:", multiplicar);

// reduce
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("La suma de los números es:", suma);

// forEach 
numeros.forEach((numero) => {
    console.log("El número es:", numero);
});

// find
const superior = numeros.find((numero) => numero >= 3);
console.log("El numero superior o igual a 3 es:", superior);

// some
const impares = numeros.some((numero) => numero % 2 !== 0);
console.log("¿Hay algún número impar?", impares);

// every
const menores = numeros.every((numero) => numero < 10);
console.log("¿Todos los números son menores que 10?", menores);

// sort
const desordenado = [5, 3, 8, 1, 2, 4];
const ordenado = desordenado.sort((a, b) => a - b);
console.log("Arreglo ordenado:", ordenado);

// findIndex
const arregloNumeros = [10, 20, 30, 40, 50];
const indice = arregloNumeros.findIndex((numero) => numero === 30);
console.log("El índice del número 30 es:", indice);

// splice
const newArray = [1, 2, 3, 4, 5];
const elimina = newArray.splice(1, 2);
console.log("Arreglo después de eliminar:", newArray);

const otherArray = [10, 20, 30, 40, 50];
const agrega = otherArray.splice(2, 0, 25, 28);
console.log("Arreglo después de agregar:", otherArray);
