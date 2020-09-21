
function validarRegistro() {
  let validado = true
  let mensaje = 'Por favor revise: <br>'
  let usuarios = document.forms['registro']
  let personas = {}
  console.log("hello")

  for (let element of usuarios.elements) {
      if (element.id) {
          if (element.id != 'contrasena2') {
              personas[element.id] = element.value
          }
      }
  }
  if (usuarios.name.value == '') {
      mensaje += '- Su nombre <br>'
      validado = false
  }
  if (usuarios.apellido.value == '') {
      mensaje += '- Su apellido <br>'
      validado = false
  }
  if (usuarios.usuario.value == '') {
      mensaje += '- Su usuario <br>'
      validado = false
  }
  if (usuarios.nacimiento.value == '') {
      mensaje += '- Su fecha de nacimiento <br>'
      validado = false
  } else {
      let fechaNacimiento = moment(usuarios.nacimiento.value)
      let diferenciaTiempo = moment().diff(fechaNacimiento, 'years')
      if (diferenciaTiempo < 18) {
          validado = false
          mensaje += '- Debes ser mayor de edad <br>'
      }
  }
  if (usuarios.contrasena.value.length < 8) {
      mensaje += '- Su contrasena debe tener al menos 8 caracteres <br>'
      validado = false
  } else {
      if (usuarios.contrasena.value != usuarios.contrasena2.value) {
          mensaje += '- Su contrasena no coincide <br>'
          validado = false
      }
  }
  if (usuarios.terminos.checked == false) {
      mensaje += '- Debes aceptar los terminos y condiciones <br>'
      validado = false
  }
  if (!validado) {
      let alerta = document.getElementById('mensaje-modal')
      alerta.innerHTML = mensaje
      $('#alerta').modal('show')
  } else {
      let sesion = {
          loggin: false,
          usuario: ''
      }
      usersE(personas,sesion);
  }
  return validado
}

const usersE = (personas,sesion)=>{
  let users = JSON.parse(localStorage.getItem("users"))
  if(!users){
    users = {
      [personas.usuario]:personas
    }
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem('sesion', JSON.stringify(sesion))
  }
  else{
    users={
      ...users,
      [personas.usuario]:personas
    }
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem('sesion', JSON.stringify(sesion))
  }
}