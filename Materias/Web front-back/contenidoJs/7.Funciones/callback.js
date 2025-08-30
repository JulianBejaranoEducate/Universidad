'use strict';

let mensaje = "Uniempresarial";

//1. Clasica y anonima
const saludo = function(msn/*parametros*/){ 
    console.log(`Hola estudiantes de ${msn}`);
}

// Función de orden superior que recibe una función como argumento
const ejecutoSaludo = (callback, otherMsn) => {
    callback(otherMsn);
}

//Invocacion
ejecutoSaludo(saludo, mensaje);