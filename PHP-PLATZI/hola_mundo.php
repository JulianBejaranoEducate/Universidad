<?php
declare(strict_types=1);

function imprimirVariable($varible){
    echo "El valor de la varibles es: ". $varible;
}
imprimirVariable("Hola, Mundo");

function imprimir($variable, $otra = "Estudiar PHP"){
    if($variable){
        echo "\nEl valor de la primera variable es: $variable";
    } else {
        echo "El valor de la segunda variable es: $otra";
    }
}
imprimir("Hola Mundo PHP\n");

function cuadrado(int $num1): int {
    return $num1 * $num1;
}
echo cuadrado(5);

$saludo = "\nHola Mundo";
function saludar(string $nombre): void{
    global $saludo;
    echo "$saludo, $nombre";
}
saludar("Julian\n");

$colores = ["Rojo", "Azul", "Naranja", "Amarillo"];
foreach ($colores as $fruta) {
    echo $fruta . "\n";
}
?>
