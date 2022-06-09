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

