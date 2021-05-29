var formulario = document.getElementById('formulario')

var todosTreinos = [{
    nome: 'Peito',
    id: 'peito',
    exercicios: ['treino 1', 'treino 2', 'treino 3'],
  },
  {
    nome: 'Costas',
    id: 'costas',
    exercicios: ['treino 1', 'treino 2', 'treino 3'],
  },
  {
    nome: 'Trícips',
    id: 'tricips',
    exercicios: ['treino 1', 'treino 2', 'treino 3'],
  },
  {
    nome: 'Biceps',
    id: 'biceps',
    exercicios: ['treino 1', 'treino 2', 'treino 3'],
  },
  {
    nome: 'Ombro',
    id: 'ombro',
    exercicios: ['treino 1', 'treino 2', 'treino 3'],
  },
  {
    nome: 'Treino inferior',
    id: 'treino-inferior',
    exercicios: ['treino 1', 'treino 2', 'treino 3'],
  },
]

function exibirNome() {
  var nomeSalvo = localStorage.getItem('nome')
  var textoNome = document.getElementById('texto-nome')
  textoNome.textContent = nomeSalvo
}

function salvarTreino(evento) {
  evento.preventDefault()

  var treino = document.getElementById('grupo-muscular').value
  var treinoStorage = []
  //So entra neste if se houver treino no localStorage
  if (localStorage.hasOwnProperty('treinos')) {
    //JSON.parse transforma em string em objeto
    treinoStorage = JSON.parse(localStorage.getItem('treinos'))
  }

  var grupoMuscular = todosTreinos.find(item => item.id === treino)
  treinoStorage.push(grupoMuscular)
  //JSON.stringify transforma um objeto em string
  localStorage.setItem('treinos', JSON.stringify(treinoStorage))
  exibirResultado()
}

function exibirResultado() {
  window.location.href = 'resultado.html'
}

exibirNome()

formulario.addEventListener('submit', salvarTreino)