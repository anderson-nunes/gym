function exibirNome() {
  const nomeSalvo = localStorage.getItem('nome')
  const textoNome = document.getElementById('texto-nome')
  textoNome.textContent = nomeSalvo
}

function exibirTreinos() {
  let cards = document.getElementById('cards')
  let treinoStorage = []
  //So entra neste if se houver treino no localStorage
  if (localStorage.hasOwnProperty('treinos')) {
    //JSON.parse transforma em string em objeto
    treinoStorage = JSON.parse(localStorage.getItem('treinos'))
  }

  treinoStorage.forEach(element => {
    const card = document.createElement('div')
    const exercicios = document.createElement('div')
    const titulo = `<h3>${element.nome}</h3>`
    element.exercicios.forEach(exercicio => {
      const item = document.createElement('p')
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