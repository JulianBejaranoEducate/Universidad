'use strict';

const listado = document.getElementById('lista_utiles');
const arrayUtiles = ['CUADERNO', 'LAPIZ', 'LIBRO', 'BORRADOR', 'MARCADOR', 'LAPICERO', 'CARTULINA', 'TEMPERAS', 'TAJALAPIZ'];
arrayUtiles.forEach(e => {
    const li = document.createElement('li')
    li.innerHTML = `<b>${e}</b>`;
    listado.appendChild(li);
});
