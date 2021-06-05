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
    var exercicios = document.createElement('div')
    var titulo = `<h3>${element.nome}</h3>`
    element.exercicios.forEach(exercicio => {
      var item = document.createElement('p')
      item.textContent = exercicio
      item.className = 'card-texto'
      exercicios.appendChild(item)
    })
    card.className = 'card-item'
    card.innerHTML = titulo
    card.appendChild(exercicios)
    cards.appendChild(card)
  });
}

exibirNome()

exibirTreinos()