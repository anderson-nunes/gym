var formulario = document.getElementById('formulario')

var todosTreinos = [{
    nome: 'Peito',
    id: 'peito',
    exercicios: [`Supino inclinado com halteres`,
      `Supino reto com barra`,
      'Afundos nas barras paralelas',
      'Crossover com pega alta',
      'Flexões'
    ]
  },
  {
    nome: 'Costas',
    id: 'costas',
    exercicios: ['treino 1', 'treino 2', 'treino 3'],
  },
  {
    nome: 'Tríceps',
    id: 'tricips',
    exercicios: ['Tríceps na testa',
      'Tríceps corda na polia',
      'Apoio no solo com as mãos fechadas(flexão militar)',
      'Supino fechado',
      'Mergulho em barras paralelas'
    ]
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

function atualizarProgresso(passo) {
  var progresso = document.getElementById('barra-progresso')

  var calculo = passo * 16.66

  progresso.style.width = `${calculo}%`

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

  if (treinoStorage.length < 6) {

    var grupoMuscular = todosTreinos.find(item => item.id === treino)
    treinoStorage.push(grupoMuscular)
    //JSON.stringify transforma um objeto em string
    localStorage.setItem('treinos', JSON.stringify(treinoStorage))

    atualizarProgresso(treinoStorage.length)
    if (treinoStorage.length == 6) {
      exibirResultado()
    }
  } else {
    exibirResultado()
  }
}

function exibirResultado() {
  window.location.href = 'resultado.html'
}

function init() {
  exibirNome()

  var treinoStorage = []

  if (localStorage.hasOwnProperty('treinos')) {
    //JSON.parse transforma em string em objeto
    treinoStorage = JSON.parse(localStorage.getItem('treinos'))
  }
  atualizarProgresso(treinoStorage.length)
}

init()

formulario.addEventListener('submit', salvarTreino)