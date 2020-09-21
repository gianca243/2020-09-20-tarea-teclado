
let teclado = document.getElementById("teclado")
let calculadora = document.getElementById("caja")
caja.addEventListener("click",(e)=>{
  let temp;
  if(e.target.innerText == "_"){
    temp = teclado.value + " ";
  } 
  else if(e.target.innerText == "<-"){
    temp = (teclado.value).slice(0,(teclado.value).length-1);
  }
  else if(e.target.innerText.length< 3) {
    temp = teclado.value + e.target.innerText;
  }
  else{
    temp = teclado.value
  }
  teclado.value=temp;
})



const tabla = document.getElementById("contenidoTabla")
const enTabla = () => {
  tabla.innerHTML=tabla.innerHTML+`
    <tr>
      <td>${teclado.value}</td>
    </tr>
  `

}