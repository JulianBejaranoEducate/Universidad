'use strict';

// 1. Hacer una funcion clasica que este asociada a un boton con un evento click y se reciba por parametro un numero o se tome de un input un valor y se devuelva al cuadrado.

function funcion() {
    const valor = document.getElementById("numero").value;
    const resultado = parseInt(valor * valor);
    alert(`El numero es ${valor} y el resultado es ${resultado}`);
}

// 2. Hacer una función tipo flecha que reciba como parámetro un objeto y los valores del objeto se muestren por consola. (Propiedades del objeto: nombre, apellido, edad).

const objeto = (persona) => {
    console.log(persona.nombre, persona.apellido, persona.edad);
}

const persona = {
    nombre: "Julian",
    apellido: "Bejarano",
    edad: 24
};

objeto(persona);


// 3. Crear una función autoinvocada que reciba un nombre y una edad y retorne un string diciendo si la persona es mayor o menor de edad

(function(nombre, edad){
    if(edad >= 18){
        return console.log(`${nombre} es mayor de edad con ${edad} años`);
    }else {
        return console.log(`${nombre} es menor de edad con ${edad} años`)
    }
})("Julian", 12);

// 4. Crear una funcion Tipo Flecha que reciba un arreglo por parametro y devolver un arreglo con los impares

const impares = (numeros) => {
    return numeros.filter(num => num % 2 !== 0);
}

const arreglo = [1, 2, 3, 4, 5, 6, 7];
const nuevoArreglo = impares(arreglo);

console.log(nuevoArreglo);