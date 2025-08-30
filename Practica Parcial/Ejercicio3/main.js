const input = document.getElementById("numero");
const boton = document.getElementById("boton");
const div = document.querySelector("body");

const calucarCuadrado = boton.addEventListener ("click", function() {
    const valor = parseFloat(input.value);
    const resultado = Math.pow(valor, 2);
    const h1 = document.createElement("h3");  
    h1.textContent = `El valor es: ${valor}, y el cuadrado es: ${resultado}`;
    div.appendChild(h1);
    console.log(resultado);
});

const objeto = (persona) => {
    console.log(persona.nombre, persona.apellido, persona.edad)
};

const persona1 = {
    nombre: "Nata",
    apellido: "Lopez",
    edad: 23
} 

objeto(persona1);