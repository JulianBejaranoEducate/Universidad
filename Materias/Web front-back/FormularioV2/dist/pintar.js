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
  const alerta = document.createElement("div");
  const texto = document.createElement("p");
  texto.setAttribute("class", "textAlerta");
  alerta.setAttribute("id", "alerta");
  alerta.setAttribute("class", "alerta");
  texto.innerHTML = `<strong>${cadena}</strong>`;
  const bntCerrar = document.createElement("input");
  bntCerrar.setAttribute("type", "button");
  bntCerrar.setAttribute("class", "btnAlerta");
  bntCerrar.setAttribute("value", "Cerrar"); 
  alerta.appendChild(texto);
  alerta.appendChild(bntCerrar);

  if (tipo === "aceptar"){    
    console.log("aqui");
    const btnEnviar = document.createElement("input");
    btnEnviar.setAttribute("type", "button");
    btnEnviar.setAttribute("class", "btnAlerta");
    btnEnviar.setAttribute("value", "Enviar");
    alerta.appendChild(btnEnviar);
    document.body.appendChild(alerta);
    btnEnviar.onclick = function(){
        console.log("aceptar");
        pintarCard(persona, "estudiante");
        document.getElementById("alerta").remove();
    };
   
  }else{
    document.body.appendChild(alerta); 
  }

 
  bntCerrar.onclick = function () {
    document.getElementById("alerta").remove();
  };
}

export { agregarEstudiante, modalAlerta };
