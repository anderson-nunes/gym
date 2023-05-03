const formulario = document.getElementById('formulario')

function salvarNome(evento) {
  evento.preventDefault() //preventDefault cancela o evento se for cancelável, sem parar a propagação do mesmo
  let nome = document.getElementById('name').value
  //localStorage salva chave e valor no navegador
  localStorage.setItem('nome', nome)
  window.location.href = 'cadastro.html'
}

function init() {

  localStorage.clear()
}

init()

formulario.addEventListener('submit', salvarNome)