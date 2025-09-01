import { validatedString,validatedTelefono } from "./validated.js";
import { modalAlerta,agregarEstudiante } from "./pintar.js";

const btnEnviar = document.querySelector("#btnEnviar");



//propiedad y .addEventListener
btnEnviar.addEventListener("click", (e) =>{
    e.preventDefault();
    const nombre = document.querySelector("#name").value.trim();
    const apellido = document.querySelector("#lastName").value.trim();
    const correo = document.querySelector("#mail").value.trim();
    const telefono = document.querySelector("#telephone").value.trim();
    const mensaje = document.querySelector("#fm_contact").value.trim();
    
    console.log({ nombre, apellido, correo, telefono, mensaje });
    

    if (!validatedString(nombre) || !validatedString(apellido) || !validatedString(correo) || !validatedTelefono(telefono)) {
        modalAlerta("Error de datos", "");
        console.log("Error en los datos");
        return;
    }
    
    if (!validatedString(mensaje)) {
        modalAlerta("Error: asegúrese de escribir un mensaje válido", "");
        console.log("Error: mensaje inválido");
        return;
    }
    
    agregarEstudiante(nombre, apellido, correo, telefono, mensaje);
    
});





