function validarLogin() {
  let validado = true
  let validado2 = false
  let mensaje = 'Su usuario o contrasena son erroneos <br>'
  let alerta = document.getElementById('mensaje-modal')
  let usuarios = document.forms['login']
  const personas = {}
  let user = JSON.parse(localStorage.getItem("users"))
  let userA;
  for (let element of usuarios.elements) {
      if (element.id) {
          personas[element.id] = element.value
      }
  }
    userA=user[personas.usuario];
  if (userA == undefined){
      validado = false
  }
  if (usuarios.usuario.value == '') {
      validado = false
  }
  if (usuarios.contrasena.value.length < 8) {
      validado = false
  }
  if (!validado) {
      let alerta = document.getElementById('mensaje-modal')
      alerta.innerHTML = mensaje
      $('#alerta').modal('show')
  } else {
      if (userA.usuario == personas.usuario && userA.contrasena == personas.contrasena) {
          let alerta = document.getElementById('mensaje-modal')
          let sesion = {
              loggin: true,
              usuario: userA.usuario
          }
          localStorage.setItem('sesion', JSON.stringify(sesion))
          validado2 = true
      } else {
          let alerta = document.getElementById('mensaje-modal')
          alerta.innerHTML = mensaje
          $('#alerta').modal('show')
      }
  }
  return validado2
}