//Document Object Model (DOM)
//É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
//Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM 

console.log(window)
//window é o objeto global do browser 
//possui diferentes métodos e propriedades

window.innerHeight  //retorna a altura do browser




//Window e Document
//São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.
window.alert('Isso é um alerta!') 
alert('Isso é um alerta!')        //Também funciona

document.querySelector('h1')      //Seleciona o primeiro h1
document.body                     //Retorna o body
//window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedade


//NODE
//Toda tag html é representada pelo Objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.
const titulo = document.querySelector('h1')

titulo.innerText  //retorna o texto
titulo.classList  //retorna as classes
titulo.id         //retorna a id
titulo.offsetHeight //retorna a altura do elemento(onde está na pagina WEB)

titulo.addEventListener('click', callback)  //ativa a funcao callback ao click no titulo



//EXERCICIOS:
//Retorne o url da página atual utilizando o objeto window
const urlPagina = window.location.href  
console.log(urlPagina)

//Selecione o primeiro elemento da página que possua a classe ativo
const classeAtivo = document.querySelector('.ativo')
console.log(classeAtivo)

//Retorne a linguagem do navegador
const linguagemNavegador = window.navigator.language

//Retorne a largura da janela


//ID
//getElementById seleciona e retorna elementos do DOM
//Seleciona pelo ID
const animaisSection = document.getElementById('animais')
const contatoSection = document.getElementById('contato')

//Retorna null caso não exista
const naoExiste = document.getElementById('teste')

//CLASSE E TAG
//getElementByClassName e getElementByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

//Seleciona pela classe, retorna uma HTMLCollection 
const gridSection = document.getElementsByClassName('grid-section')
const contato = document.getElementsByClassName('grid-section contato')

//Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul')

//Retorna o primeiro elemento
console.log(gridSection[0])


//Seletor Geral Único
// querySelector retorna o primeiro elemento que combinar com o seu seletor css
const animais = document.querySelector('.animais')
const animais = document.querySelector('#contato')
const animais = document.querySelector('.animais-lista li:last-child')
const animais = document.querySelector('[href^="https://"]')
const animais = document.querySelector('ul')

//Busca dentro do UL apenas
const navItem = primeiroUl.querySelector('li')

//SELETOR GERAL LISTA
//querySelectorAll retornas todos os elementos compatíveis com o seletor CSS em uma NodeList
const griSelection = document.querySelectorAll('.grid-section')
const griSelection = document.querySelectorAll('ul')
const griSelection = document.querySelectorAll('.titulo')
const griSelection = document.querySelectorAll('.animais-lista img')

//Retorna o segundo elementos
console.log(gridSection[1])

//Array-Like
//HTMLCollection e NodeLIst são array-like, parecem uma array mas não são, O método de Array forEach() por exemplo, existe apenas no Nodelist
const griSelection = document.querySelectorAll('.grid-section')
gridSection.forEach(function(gridItem,index, array) {
  gridItem.classList.add('azul')
  console.log(index) //index do item na array
  console.log(array) // a array completa
})


//EXERCICIOS
//Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img')
console.log(imagens)





//forEach
//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach
const imgs = document.querySelectorAll('img')
imgs.forEach(function(item) {
  console.log(item)
})

//Parâmetros no forEach.
//O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse tipo de função pode receber três parâmetros: valorAtual, index e array
const imgs = document.querySelectorAll('img')

imgs.forEach(function(valorAtual, index, array) {
  console.log(item) //o item atual do loop
  console.log(index)//o número do index
  console.log(array)//a Array completa
})

//forEach e Array
//forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é tranforma-lo em uma array.
//Abaixo estou transformando uma HTMLCollection em uma Nodelista(array)
const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

titulosArray.forEach(function(item) {
  console.log(item)
})


//Arrow Function 
//Sintaxe curta em relação a function. Basta remover a palavra function e adicionar a fat arrow => após os argumentos
const imgs  = documents.querySelectorAll('img')
imgs.forEach((item)=> {
  console.log(item)
})

//Classlist
//Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém
const menu = document.querySelector('.menu')

menu.className  //string
menu.classList  //lista de classes
menu.classList.add('ativo')
menu.classList.add('ativo', 'mobile') //duas classes
menu.classList.remove('ativo')  
menu.classList.toggle('ativo')  //adiciona/remove a classe
menu.classList.contains('ativo') //true ou false
menu.classList.replace('ativo', 'inativo')

//getAttribute e setAttibute
//Métodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img')

img.getAttribute('src') //valor do src
img.setAttribute('alt', 'Texto Alternativo') //muda o alt
img.hasAttribute('id') //true  / false
img.removeAttribute('alt')  //remove o alt

img.hasAttribute() //true / false se tem algum atributo


//Read Only vs Writable
//Existem propriedades que não permitem a mudança de seus valores, essas são consideradas Read Only, ou seja, apenas leitura
const animais = document.querySelector('.animais')

animais.className //string com o nome das classes
animais.className = 'azul'  //substitui completamente a string
animais.classList += 'vermelho' //adiciona vermelho à string

animais.attributes = 'class="ativo' //não funciona, read-only

//Height e Width
//Estas são propriedades e métodos dos objetos Element e  HTMLElement, a maioria delas são Read Only
const section = document.querySelector('.animais')

section.clientHeight  //heigth + padding
section.offsetHeight  //heigth + padding + border
section.scrollHeight  //height total, mesmo dentro do scrool 

//Mesma coisa para o Width, clientWidth


//offsetTop e offsetLeft
const section = document.querySelector('.animais')

//distancia entre o topo do elemnto e o topo da página
section.offsetTop

//distancia entre o canto esquerdo do elemento 
//e o canto esquerdo da página
section.offsetLeft


//getBoundingClientRect()
//Método que retorna um objeto com valores de width, height, distancias do elmeento e mais

const section = document.querySelector('.animais')

const rect = section.getBoundingClientRect()
rect.height
rect.width
rect.top      //distancia entre o topo do elemento e o scroll


//MatchMedia()
//Utilize um media-querie como no css para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)')
if(small.matches) {
  console.log('tela menor que 600px')
} else {
  console.log('tela maior que 600px')
}
