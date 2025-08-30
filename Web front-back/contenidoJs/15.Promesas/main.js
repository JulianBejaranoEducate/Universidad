'use strict';

// Definir la promesa
const promesa = new Promise((resolve, reject) => {
    // Consumir servicio a traves de el protocolo HTTP
    const request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    request.onload = function(){
        if(request.status == 200){// Pueden ser verbos 200, 201, 400, 500
            resolve(JSON.parse(request.response));
        }else{
            reject();
        }
    };
    request.send();
});

// Ejecucion de la promesa
promesa
    .then(resolve => {
        console.log(resolve);
    })
    .catch(error => {
        console.log(error, reject);
    })
    .finally(console.info("Se ha finalizado la promesa"))
