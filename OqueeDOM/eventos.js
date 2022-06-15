// addEventListener
// Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento
const img = document.querySelector('img')

//elemento.addEventListener(event,callback, options)
img.addEventListener('click', function(){
  console.log('Clicou ')
})


//Callback
// É uma boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima
const img = document.querySelector('img')
function callback(){
  console.log('clicou')
}

img.addEventListener('click', callback)
img.addEventListener('click', callback()) //undefined
img.addEventListener('click', function() {
  console.log('clicou')
})

img.addEventListener('click', () => {
  console.log('clicou')
})


//Event
//O primeiro parâmetro do callback é referente ao evento que ocorreu
const img = document.querySelector('img')

function callback(event) {
  console.log(event)
}

img.addEventListener('click', callback)

//Diferentes eventos
//Existem diversos eventos como os abaixo e até mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também

const h1 = document.querySelector('h1')

function callback(event) {
  console.log(event.type,event)

}

h1.addEventListener('click', callback)
h1.addEventListener('mouseenter', callback)
window.addEventListener('scroll', callback)
window.addEventListener('resize', callback)
window.addEventListener('keydown', callback)