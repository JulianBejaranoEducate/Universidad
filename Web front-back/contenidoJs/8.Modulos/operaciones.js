'use strict';

//1. Clasica
function operacionPotencia(/*Recibir argumentos o parametros*/base, potencia){
    return Math.pow(base, potencia);
}

//2. Flecha
const operacionFactorial = (numero)=>{
    let resultado = 1;
    for(let i = 1; i <= numero; i++){
        resultado *= i; //acumulador
    }
    return resultado;
}

export {
    operacionPotencia as potencia, 
    operacionFactorial as factorial
};