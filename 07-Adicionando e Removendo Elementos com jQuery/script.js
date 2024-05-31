// Adicinando um botão ANTES da tag 'h1'
$('h1').before('<button>Before Button</button>')

// Adicinando um botão DEPOIS da tag 'h1'
$('h1').after('<button>After Button</button>')

// Adiciona ANTES do conteúdo do 'h1', porém dentro da tag
$('h1').prepend('<button>Prepend Button</button>')

// Adiciona DEPOIS do conteúdo do 'h1', porém dentro da tag
$('h1').append('<button>Append Button</button>')

// Removendo todos os elementos 'button'
//$('button').remove()