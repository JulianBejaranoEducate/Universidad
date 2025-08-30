'use strict';

let numero1 = 3;
let numero2 = 18;
let numero3 = 2;

if(numero1 % numero3 === 0){
    console.log("es par");
}else if(numero1 % 3 === 0){
    console.log("es divisible entre 3"); // También es multiplo de 3
    if(numero2 % 2 === 0 && numero2 % 3 === 0){
        console.log("numero2 es par y multiplo de 3");
    }
}

let nota = 2.5;
switch(true)
{
    case (nota >= 0 && nota < 3): // && es un operador estricto y || es un operador flexible
        console.log("Reprobado");
        break;
    case (nota >= 3 && nota <= 5):
        console-log("Aprobado");
        break;
}

// Bucles
console.log("***************************** WHILE **********************************");
let contador = 10;
while(contador >= 0){
    console.log("Contador:", contador);
    contador --;
}

console.log("***************************** DO - WHILE **********************************");
do{ // Se ejecuta siempre al menos una vez
    console.log("Contador:" + contador);
    contador ++;
}while(contador <= 10);

console.log("***************************** FOR **********************************");
for(let i = 0; i < 100; i ++){
    console.log("Iterador: " + i);
}

// Ternario: abreviación de if-else
let resultado = (numero1 > 0) ? "Es positivo" : "Es negativo"; // ? = True y : = False
console.log("Resultado del ternario", resultado);

// Nullish ??
let valor = null;
resultado = valor === null ? "Es nulo" : "No es nulo";
console.log("Resulatdo del valor es:", resultado);
resultado = valor ?? "Es nulo";
console.log("Resultado del valor comparado ??:", resultado);