const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const enviar = document.getElementById("enviar");
const formularioValido = document.getElementById("confirmar");
const validezNombre = document.getElementById("validezNombre");
const validezEmail = document.getElementById("validezEmail");
const validezMensaje = document.getElementById("validezMensaje");

const p = document.createElement("p");
const pNombre = document.createElement("p");
const pEmail = document.createElement("p");
const pMensaje = document.createElement("p");

function formInvalido(etiqueta) {
  etiqueta.style.border = ".1em solid red";
  etiqueta.style.color = "red";
  pNombre.style.color = "red";
  pEmail.style.color = "red";
  pMensaje.style.color = "red";
}

function formValido(etiqueta) {
  etiqueta.style.border = ".1em solid green";
  etiqueta.style.color = "black";
}

function revisionNombre() {
  let esValido = false;
  if (nombre.value.length > 2) {
    esValido = true;
  }
  return esValido;
}

function revisionEmail() {
  let esValido = false;
  let cantidad = 0;
  while (cantidad < email.value.length && !esValido) {
    if (email.value[cantidad] == "@") {
      esValido = true;
    }
    cantidad++;
  }
  for (let i = 0; i < email.value.length; i++) {
    if (email.value[i] == " ") {
      esValido = false;
    }
  }
  return esValido;
}

function revisionMensaje() {
  let esValido = false;
  if (mensaje.value.length > 9) {
    esValido = true;
  }
  return esValido;
}

enviar.addEventListener("click", (e) => {
  e.preventDefault();

  if (!revisionNombre()) {
    formInvalido(nombre);
    pNombre.textContent = "Minimo tres caracteres";
    validezNombre.appendChild(pNombre);
  } else {
    formValido(nombre);
    pNombre.textContent = "";
  }

  if (!revisionEmail()) {
    formInvalido(email);
    pEmail.textContent = "Email mal escrito";
    validezEmail.appendChild(pEmail);
  } else {
    formValido(email);
    pEmail.textContent = "";
  }
  if (!revisionMensaje()) {
    formInvalido(mensaje);
    pMensaje.textContent = "Minimo diez caracteres";
    validezMensaje.appendChild(pMensaje);
  } else {
    formValido(mensaje);
    pMensaje.textContent = "";
  }

  if (revisionNombre() && revisionEmail() && revisionMensaje()) {
    p.textContent = "Enviado con éxito";
    p.style.color = "green";
  } else {
    p.textContent = "No pudo ser enviado";
    p.style.color = "red";
  }
  p.classList.add("enviado");
  formularioValido.appendChild(p);
});
