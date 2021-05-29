function exibirNome() {
  var nomeSalvo = localStorage.getItem('nome')
  var textoNome = document.getElementById('texto-nome')
  textoNome.textContent = nomeSalvo
}

function exibirTreinos() {
  var cards = document.getElementById('cards')
  var treinoStorage = []
  //So entra neste if se houver treino no localStorage
  if (localStorage.hasOwnProperty('treinos')) {
    //JSON.parse transforma em string em objeto
    treinoStorage = JSON.parse(localStorage.getItem('treinos'))
  }

  treinoStorage.forEach(element => {
    var card = document.createElement('div')
    var titulo = `<h3>${element.nome}</h3>`
    var exercicios = element.exercicios.map(exercicio => {
      return `<p>${exercicio}</p>`
    })
    card.className = 'card-item'
    card.innerHTML = titulo + exercicios
    cards.appendChild(card)
  });
}

exibirNome()

exibirTreinos()