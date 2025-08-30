"use strict";

//1. Clasica
/*
    - Las funciones deben cumplir con más de una tarea, refractar la tarea
    - Siempre deben retornar algo
*/
function operacionPotencia(/*Recibir argumentos o parametros*/base, potencia){
    return Math.pow(base, potencia);
}

//Invocación
const resultado = operacionPotencia(2, 6);
console.log(resultado);
console.log(operacionPotencia(10, 4));

//2. Flecha
const operacionFactorial = (numero) => { // Es la multiplicación de todos los números enteros positivos hasta el número dado
    let resultado = 1;
    for(let i = 1; i <= numero; i ++){
        resultado *= i; //acumulador
    }
    return resultado;
}
//Invocacion
console.log(operacionFactorial(4));

//Flecha
const operacionSuma = (num1, num2) => num1 + num2;
console.log(operacionSuma(5, 3));

//3. Funcion tipo objetivo
const numero1 = 10;
const numero2 = 2;
const suma = new Function("num1", "num2", "return num1 + num2");
console.log(suma(numero1, numero2));

/*const multiplos = (arreglo) =>{
    const myArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    let multiploCc = 
}*/

const myArray = (arreglo) => {
    let resultado = [];
    for(let i = 0; i <= arreglo.length; i ++){
        if(arreglo[i] % 4 ===0 || arreglo[i] % 5 === 0){
            resultado.push(arreglo[i]);
        }
    }
    return resultado;
}

let myArrayNew = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];
console.log(myArray(myArrayNew));