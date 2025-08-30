'use strict';

// Los arreglos tienen varios metodos que permiten manipularlos: filter, map, reduce, forEach, find, some, every, sort, etc. 
// Consultar más arregos

const buscarElemento = (data) => {
    let result = data.filter((e/*variable de iteracion*/) => e % 2 === 0);
    return result;
}

const generarCuadros = (data) => {
    return data.map((e) => e * e);
}

export { 
    buscarElemento as filtrarPares, 
    generarCuadros as cuadros
};