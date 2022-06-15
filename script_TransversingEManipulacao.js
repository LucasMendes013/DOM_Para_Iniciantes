// const menu = document.querySelector('.menu')

// console.log(menu.outerHTML)   //todo o html do elemento
// console.log(menu.innerHTML)   //html interno
// console.log(menu.innerText)   //texto, sem tags

// console.log(menu.innerText = '<p>Texto<p>')  //a tag vai como texto
// console.log(menu.innerHTML = '<p>Texto<p>')  //a tag é renderizada 


// const lista = document.querySelector('.animais-lista')

// console.log(lista.children[--lista.children.length] )



//Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const cloneMenu = menu.cloneNode(true)
const copy = document.querySelector('.copy')
copy.appendChild(cloneMenu)
console.log(menu,copy)

//Selecione o primeiro DT da DL de FAQ
const dt = document.querySelector('.faq-lista')
const dl = dt.children[0]
const dd = dl.nextElementSibling
console.log(dd)

//Substitua o conteudo html de .faq pelo de .animais
const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais-descricao')
faq.innerHTML = animais.innerHTML