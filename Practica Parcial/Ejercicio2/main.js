'use strict';

// Crea un programa que convierta la edad de un perro a años humanos. Solicita al usuario que indique la edad de su perro en años. Calcula la edad del perro en años humanos multiplicando la edad del perro por 7. Muestra la edad del perro en años humanos al usuario. Ejemplo de entrada: Edad del perro: 5 años. Salida esperada: La edad del perro en años humanos es 35 años. La forma común de estimar la edad canina es multiplicar la edad del perro por 7. Esto se basa en la idea de que un año de vida de un perro equivale aproximadamente a siete años de vida humana en términos de desarrollo y envejecimiento.

const edad = document.getElementById("edad");
const boton = document.getElementById("boton");
const div = document.querySelector("body");

boton.addEventListener ('click',() => {
    const edadPerro = parseInt(edad.value);
    const añosHumanos = edadPerro * 7;
    if (!div) {
        const texto = document.createElement("p");
        texto.setAttribute(div);
        texto.textContent = `La edad del perro en años humanos es: ${añosHumanos}`;
        div.appendChild(texto);
        console.log(añosHumanos);
    } else {
        console.log("Ya existe el elemento");
    }
});