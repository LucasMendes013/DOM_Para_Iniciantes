const img = document.querySelector('img')

function callback() {
  console.log('clicou')
}

img.addEventListener('click', ()=> {

})

//Propriedades do Event
const animaisLista = document.querySelector('.animais-lista')

function executarCallback(event) {
  const currentTarget = event.currentTarget //this
  const target = event.target //onde o clique ocorreu
  const type = event.type
  const path = event.path
  console.log(currentTarget, target, type, path)
  
}

animaisLista.addEventListener('click', executarCallback)

//event.preventDefault()
//Previne o comportamento padrao do evento no browser. No caso de um link externo, por exemplo, ira previnir que o link seja ativado
const linkExterno = document.querySelector('a[href^="http"]')

function clickNolink(event) {
  event.preventDefault()
  console.log(event.currentTarget.href)
}

linkExterno.addEventListener('click', clickNolink)




function handleKeyboard(event) {
  if(event.key === 'f'){
  document.body.classList.toggle('fullscreen')
  }
}
window.addEventListener('keydown',handleKeyboard)



//Quando ele clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')
linksInternos.forEach((link) => {
  
  function handleLink(event) {
    event.preventDefault()
    linksInternos.forEach((link) => {
      link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
  } 

  link.addEventListener('click', handleLink)
})


//Selecione todos os elementos  do site começando a partir do body, ao clique mostre exatamente quais elementos estao sendo clicados
const todosElementos = document.querySelectorAll('*')

function handleElemento(event) {
 event.currentTarget.remove
}

todosElementos.forEach((elemento) {
  elemento.addEventListener('click', handleElemento)
})

//Se o usuario clicar na tecla T aumente todo o texto de todo o site
function handleClickT(event){
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown', handleClickT)