let user = JSON.parse(localStorage.getItem("sesion"))
if(user.loggin == false){
  window.location.assign("../index.html")
}
else{
  const nombre = document.getElementById("nombre")
  nombre.innerText= nombre.innerText + " " + user.usuario
}

const salir = () => {
  user = {
    loggin: false,
    usuario: ""
  }
  localStorage.setItem("sesion", JSON.stringify(user))
  window.location.assign("../index.html")
}

