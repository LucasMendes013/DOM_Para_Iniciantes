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

