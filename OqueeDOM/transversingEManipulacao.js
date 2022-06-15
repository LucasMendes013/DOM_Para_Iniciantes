//outerHTML, innerHTML e innerText
//Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo texto'
const menu = document.querySelector('.menu')

menu.outerHTML   //todo o html do elemento
menu.innerHTML   //html interno
menu.innerText   //texto, sem tags

menu.innerText = '<p>Texto<p>'  //a tag vai como texto
menu.innerHTML = '<p>Texto<p>'  //a tag é renderizada 


//Transversing
//Como navegar pelo DOM, utilizando suas propriedades e métodos
const lista = document.querySelector('.animais-lista')

lista.parentElement               //pai
lista.parentElement.parentElement //pai do pai
lista.previousElementSibling      //elemento acima
lista.nextElementSibling          //elemento abaixo

lista.children                            //HTMLCollection com os filhos
lista.children[0]                         //primeiro filho
lista.children[--lista.children.length]   //ultimo filho

lista.querySelectorAll('li')              //todas as li's
lista.querySelector('li:last-child')      //ultimo filho



//Element vs Node
//Element's representam um elemento html, ou seja, uma tag. Enquanto isso, o Node representa um nó, e pode ser um elemento(element), texto, comentário,quebra de linha e mais

lista.previousElementSibling  //elemento acima
lista.previousSibling         //node acima

lista.firstChild    //primeiro node child
lista.childNodes    //todos os node child

//Manipulando elementos
//É possível mover elementos no dom com métodos de Node
const lista = document.querySelector('.animais-lista')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')

contato.appendChild(lista) //move a lista para o final de contato
contato.insertBefore(lista, titulo)//insere a lista antes de titulo
contato.removeChild(titulo) //remove titulo de contato
contato.replaceChild(lista, titulo)//substitui titulo por lista