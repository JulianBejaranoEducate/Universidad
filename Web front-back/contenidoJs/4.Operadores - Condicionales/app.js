'use strict';
// Operadores: aritmeticos, logicos, comparacion, asigancion
// 

let numero1 = 10;
let numero2 = 20;
let numero3 = "20";

let resultado = numero1 + numero2;
console.log("Resultado de la suma:", resultado);

resultado = numero1 - numero2;
console.log("Resultado de la resta:", resultado);

resultado = numero1 * numero2;
console.log("Resultado de la multiplicacion:", resultado);

resultado = numero1 / numero2;
console.log("Resultado de la division:", resultado);

resultado = numero1 % numero2;
console.log("Resultado del modulo:", resultado);

// Logicos
let boolResultado = (numero1 > numero2);
console.log("Resultado de la comparacion (numero1 > numero2):", boolResultado);
// Comparación no estricta
boolResultado = (numero2 == numero3);
console.log("Resultado de la comparacion (numero2 == numero3)", boolResultado);
// Comparacion estricta
boolResultado = (numero2 === numero3); // Comparacion 
console.log("Resultado de la comparacion (numero2 === numero3)", boolResultado);