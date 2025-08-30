// Escribe un programa que calcule el coste total de un viaje, incluyendo los gastos de alojamiento, alimentación y entretenimiento. Solicita al usuario que ingrese los gastos estimados para cada categoría. Calcula el coste total sumando todos los gastos. Muestra el coste total al usuario. Ejemplo de entrada: Gastos de alojamiento: 200€, Gastos de alimentación: 150€, Gastos de entretenimiento: 100€. Salida esperada: El coste total del viaje es 450€.

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const boton = document.getElementById("boton");
const div = document.querySelector("body");

boton.addEventListener('click', function(){
    const total = parseFloat(input1.value) + parseFloat(input2.value) + parseFloat(input3.value);
    const h1 = document.createElement("p");
    h1.textContent = `El valor total del viaje es ${total}`;
    div.appendChild(h1);
});

