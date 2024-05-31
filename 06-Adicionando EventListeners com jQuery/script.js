// Click

// Antes
/*for (let i = 0; i < 5; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', () => {
        document.querySelector('h1').style.color = 'purple'
    })
}*/
// Com jQuery
$('button').click(() => {
    $('h1').css('color', 'purple')
})


// Retorna a tecla que foi apertada
$(document).keypress(e => {
    $('h1').text(e.key)
})


// Alterando a cor do 'h1' ao passar o mouse sobre o elemento 
$('h1').on('mouseover', () => {
    $('h1').css('color', 'green')
})