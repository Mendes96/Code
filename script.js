var body = document.querySelector("body")
var container = document.querySelector(".container")
//seleciona a caixa com todos os botoes
var btn = document.querySelectorAll(".caixaBtn .btn")
var tudao = document.querySelector("html")
/*
function escuro(){
  body.style.background = "var(--corAzul2)"
  container.style.background = "var(--corAzul)"
  container.style.borderColor = "var(--corAzul)"
  container.style.color = "white"
  
  for(const b of btn){
    b.style.background = "var(--corAzul)"
    b.style.borderColor = "var(--corAzul)"
    b.style.color = "white"
    
  }
}

function claro(){
  body.style.background = "var(--corFundo)"
  container.style.background = "var(--corFundo2)"
  container.style.borderColor = "var(--corAzul3)"
  container.style.color = "var(--texto2)"
  //modifica todos oa botoes da caixa btn
  for(let b of btn){
    b.style.background = "var(--corFundo2)"
    b.style.borderColor = "var(--corAzul3)"
    b.style.color = "var(--texto2)"
    
  }
}
*/

function darkMode(){
  var d = document.querySelector(".dark-mode");
  
  if(d.innerHTML == "light_mode"){
    d.innerHTML = "dark_mode"
    
    body.style.background = "var(--corFundo)"
    container.style.background = "var(--corFundo2)"
    container.style.borderColor = "var(--corAzul3)"
    container.style.color = "var(--texto2)"
    d.style.color = "var(--corAzul)"
  }else{
    d.innerHTML = "light_mode"
    
    body.style.background = "var(--corAzul2)"
    container.style.background = "var(--corAzul)"
    container.style.borderColor = "var(--corAzul)"
    container.style.color = "white"
    d.style.color = "white"
  }
  
  console.log(d)
}