'use strict';

//1. Creacion objeto literal de JS
let curso = {
    nombre : "JavaScript",
    duracion : "60",
    nivel : "medio",
    capacidad : "20"
}
console.log(curso.nombre, curso.duracion, curso.nivel, curso.capacidad);

//2. Creacion de objeto por constructor
function persona(name, lastName, age){
    this.nombre = name;
    this.apellido = lastName;
    this.edad = age;
}

// Instancia tipo persona "Instancia es crear un objeto a partir de un constructor"
let myPerson = new persona("Juan", "Cardenas", 43);
console.log(myPerson);

const nombreLibro = "IT";
const genero = "Terror";
const editorial = "Fama";

const libro = {
    nombreLibro,
    genero,
    editorial,
    escribir: () => {
        return `El libro es ${nombreLibro} del genero ${genero} y lo consigue en la editorial ${editorial}`
    }
}

console.log(libro.escribir());

console.log("====================================================");
console.log(Object.values(libro));
console.log(Object.keys(curso));
console.log("====================================================");

// Volver iterable un objeto
Object.entries(libro).forEach(([key, value]) => console.log(key, value));

// Iterables
/*
    - Los arreglos y las cadenas de caracteres son iterables
    - Ahora los objetos directamente no podemos iterarlos
    - Los iterables son un protocolo que se puede aplicar a cualquier arreglo.
*/ 

console.log("======================== Iterables ============================");
const arreglo = [1, "6", 3.3, false, "hola"];
const myIterator = arreglo[Symbol.iterator]();
console.log(myIterator);
console.log(myIterator.next());

for(let c of arreglo){ //No se puede con color
    console.log(c);
}

console.log("====================================================");
let color = { //Es un JSON y objeto
    nombre: "Rojo Fuerte",
    color: "Rojo",
    marca: "PrismaColor",
};

color[Symbol.toStringTag] = "Color"; // Cambia el nombre del objeto cuando se imprime

// Como iterar el objeto
color[Symbol.iterator] = function* () {
    for (let key of Object.keys(this)) {
        yield [key, this[key]];
    }
};

for (let [key, value] of color) {
    console.log(key, value);
}
