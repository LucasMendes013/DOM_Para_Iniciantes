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