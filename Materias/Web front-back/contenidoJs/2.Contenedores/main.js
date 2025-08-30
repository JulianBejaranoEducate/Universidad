/* 
    Modos de trabajar con JS: slooping y strict
*/
'use strict'; //Modo estricto, ayuda a evitar errores comunes y mejora la seguridad del código
/* 
    Contenedores: var-> global, left->, local, const-> constante-local
    Son para declarar e inicializar variables y constantes
*/
var vari1 = "23"; // No usar
let vari2 = "Hola"; // Es contenedor local, no se puede usar fuera del bloque donde se declara
const vari3 = "Soy una constante";

if(true){
    var vari1 = 23;
    var num1 = 10;
    let vari2 = 50;
    console.log(vari2);
    // vari3 = 45;
}

console.log(vari1, " ", vari2); // Tomma el contenedor global vari1, y el local vari2
console.log(num1) // num1 es accesible proque se declaro con la constante var 