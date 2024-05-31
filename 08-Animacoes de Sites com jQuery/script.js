// Ao clicar em um botão, se o 'h1' estiver Visivel ele desaparece(hide), se não ele aparece (show)
/*$('button').on('click', () => {
    $('h1').toggle()
})*/


// Ao clicar em um botão, se o 'h1' estiver Visivel ele desaparece (fadeOut), se não, ele aparece (fadeIn). Tudo isso com uma 'animação'
/*$('button').on('click', () => {
    $('h1').fadeToggle()
})*/


// Ao clicar em um botão, se o 'h1' estiver Visivel ele desaparece (slideUp), se não, ele aparece (slideDown). Tudo isso com uma 'animação' de DESLIZAR
/*$('button').on('click', () => {
    $('h1').slideToggle()
})*/


// Adicionando ANIMAÇÂO ao clicar no botão
/*$('button').on('click', () => {
    $('h1').animate({
        opacity: .5,
        margin: 20
    })
})*/


$('button').on('click', () => {
    $('h1').slideUp().slideDown().animate({opacity: .5})
})