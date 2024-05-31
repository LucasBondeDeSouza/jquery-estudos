// Array que contém as cores dos botões disponíveis no jogo
let buttonColours = ['red', 'blue', 'green', 'yellow']

// Array que armazena a sequência de cores gerada pelo jogo.
let gamePattern = []

// Array que armazena a sequência de cores clicadas pelo usuário
let userClickedPattern = []

// Contador para o nível atual do jogo
let level = 0

// Booleano que indica se o jogo foi iniciado ou não
let started = false

// Função que Inicia o jogo, ao clicar qualquer tecla
$(document).keypress(() => {
  if (!started) {
    $('#level-title').text(`Level ${level}`)
    nextSequence()
    started = true
  }
})

// Adiciona o botão clicado pelo usuário no array
$('.btn').click(e => {
  let userChosenColour = $(e.target).attr('id');
  userClickedPattern.push(userChosenColour)
  playSound(userChosenColour)
  animatePress(userChosenColour)

  checkAnswer(userClickedPattern.length - 1)
})

// Verifica se a escolha do usuario é a mesma do jogo. Se for o jogo vai para a próxima sequência, se não o jogo acaba
const checkAnswer = currentLevel => {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound('wrong')

    $('body').addClass('game-over')
    setTimeout(function () {
      $('body').removeClass('game-over')
    }, 200);

    $('#level-title').text('Game Over, Press Any Key to Restart')

    startOver()
  }
}

// Adiciona uma nova sequencia de cor ao jogo
const nextSequence = () => {
  userClickedPattern = []

  level++
  $('#level-title').text(`Level ${level}`)

  let randomNumber = Math.floor(Math.random() * 4)
  let randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)

  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100)
  playSound(randomChosenColour)
}

// Ativar o som do botão selecionado
const playSound = name => {
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

// Animação do Botão selecionado
const animatePress = currentColour => {
  $(`#${currentColour}`).addClass('pressed')

  setTimeout(() => {
    $(`#${currentColour}`).removeClass('pressed')
  }, 100)
}

// Função para reinicar o jogo, zerando Tudo
const startOver = () => {
  gamePattern = []
  level = 0
  started = false
}