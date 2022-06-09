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

