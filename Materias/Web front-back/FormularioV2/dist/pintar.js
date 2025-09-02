const cardsEstudiantes = document.querySelector("#cardsEstudiantes");

const agregarEstudiante = (name, lastName, mail, tele, msn) => {
  let persona = {
    nombre: name,
    apellido: lastName,
    correo: mail,
    telefono: tele,
    mensaje: msn,
  };
  let text = `¿Está seguro(@) ${persona.nombre} de envíar la petición?`;
  modalAlerta(text,"aceptar",persona);
 
}

const pintarCard = (datos, tipo) => {
  console.log(datos);
  //console.log(tipo);
  tipo = tipo.toUpperCase();
  const fragmento = document.createDocumentFragment();
  const templateEstudiante = document.querySelector(
    "#templateEstudiante"
  ).content;
  if (tipo === "ESTUDIANTE") {
    var cloneTemp = templateEstudiante.cloneNode(true);
    console.log(cloneTemp);
    cloneTemp.querySelector(".title-card").innerHTML = "DATOS DEL PQR <hr>";
    cloneTemp.querySelector(
      ".data-card"
    ).innerHTML = ` NOMBRES Y APELLIDOS: ${datos.nombre.toUpperCase()} ${datos.apellido.toUpperCase()}`;
    cloneTemp.querySelector(
      ".text-mail"
    ).innerHTML = ` CORREO ELECTRÓNICO: ${datos.correo.toUpperCase()}`;
    cloneTemp.querySelector(
      ".text-telefono"
    ).innerHTML = `TELÉFONO DE CONTACTO ${datos.telefono}`;
    cloneTemp.querySelector(
      ".text-msn"
    ).innerHTML = `MENSAJE PQR:<br><br> ${datos.mensaje}`;
    fragmento.appendChild(cloneTemp);
  }
  cardsEstudiantes.appendChild(fragmento);
};

function modalAlerta(cadena, tipo, persona) {
  // Remover alerta anterior si existe
  const alertaExistente = document.getElementById("alerta");
  if (alertaExistente) {
    alertaExistente.remove();
  }

  const alerta = document.createElement("div");
  const texto = document.createElement("p");
  texto.setAttribute("class", "textAlerta");
  alerta.setAttribute("id", "alerta");
  
  // Agregar clase según el tipo de alerta
  if (tipo === "error") {
    alerta.setAttribute("class", "alerta alerta-error");
  } else if (tipo === "exito") {
    alerta.setAttribute("class", "alerta alerta-exito");
  } else {
    alerta.setAttribute("class", "alerta");
  }
  
  texto.innerHTML = `<strong>${cadena}</strong>`;
  const bntCerrar = document.createElement("input");
  bntCerrar.setAttribute("type", "button");
  bntCerrar.setAttribute("class", "btnAlerta");
  bntCerrar.setAttribute("value", "Cerrar"); 
  alerta.appendChild(texto);
  alerta.appendChild(bntCerrar);

  if (tipo === "aceptar"){    
    console.log("Modalidad aceptar activada");
    const btnEnviar = document.createElement("input");
    btnEnviar.setAttribute("type", "button");
    btnEnviar.setAttribute("class", "btnAlerta btnAlerta-enviar");
    btnEnviar.setAttribute("value", "Enviar");
    alerta.appendChild(btnEnviar);
    document.body.appendChild(alerta);
    
    btnEnviar.onclick = function(){
        console.log("Confirmación aceptada, enviando datos...");
        pintarCard(persona, "estudiante");
        document.getElementById("alerta").remove();
        // Limpiar formulario después del envío exitoso
        limpiarFormulario();
        // Mostrar mensaje de éxito
        setTimeout(() => {
          modalAlerta("¡Su mensaje ha sido enviado exitosamente!", "exito");
        }, 500);
    };
   
  } else {
    document.body.appendChild(alerta); 
  }

  // Cerrar modal al hacer clic en cerrar
  bntCerrar.onclick = function () {
    document.getElementById("alerta").remove();
  };
  
  // Cerrar modal al hacer clic fuera de él
  alerta.addEventListener('click', function(e) {
    if (e.target === alerta) {
      alerta.remove();
    }
  });
  
  // Cerrar modal con la tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById("alerta")) {
      document.getElementById("alerta").remove();
    }
  });
}

// Función para limpiar el formulario
function limpiarFormulario() {
  const campos = ['name', 'lastName', 'mail', 'telephone', 'fm_contact'];
  campos.forEach(campo => {
    const elemento = document.getElementById(campo);
    if (elemento) {
      elemento.value = '';
      elemento.classList.remove('error');
    }
  });
  
  // Limpiar mensajes de error
  const mensajesError = document.querySelectorAll('.mensaje-error');
  mensajesError.forEach(mensaje => mensaje.remove());
}

export { agregarEstudiante, modalAlerta };
