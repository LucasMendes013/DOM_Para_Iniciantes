const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')

console.log(gridSection[1])

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linksInternos = document.querySelector('[href^="#"')
console.log(linksInternos)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[0])

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

console.log(gridSectionHTML)
console.log(gridSectionNode)

gridSectionNode.forEach(function(item,index) {
  console.log(index)
})

const arrayGrid = Array.from(gridSectionHTML)

//Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img')
console.log(imagens)

//Retorne no console apenas imagens que comecam com a palavra imagem
const imagensImg = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagensImg)

//Selecione todos os links internos  (onde o href começa com #)
const todosLinks = document.querySelectorAll('[href^="#"]')
console.log(todosLinks)

//Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 =document.querySelector('.animais-descricao h2')
console.log(primeiroh2.innerText)

//Selecione o ultimo p do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length - 1])


//forEach
const imgs = document.querySelectorAll('img')

imgs.forEach(function(item, index, array) {
  // console.log(item,index,array)
})

//Mostre no console cada paragrafo do site 
const paragrafos2 = document.querySelectorAll('p')


paragrafos2.forEach((item,index, array) =>{
  console.log(item.innerText,index, array)
})

//Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')

  itensMenu.forEach((item) => {
    item.classList.add('ativo')
  })

//remover a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
  item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')

//verifique se as imagens possuem o atributo alt
const imgsAlt = document.querySelectorAll('img')
imgsAlt.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt')
  console.log(img, possuiAtributo)
})

//Modifique o href do link externo do menu
const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://www.google.com/')


const listaAnimais = document.querySelector('.animais-lista')

const heigth = listaAnimais.scrollHeight
const animaisTopo = listaAnimais.offsetTop
console.log(animaisTopo)

// let primeiroh2 = document.querySelector('h2')
// const h2Left = primeiroh2.offsetLeft

// console.log(h2Left)

let rect = primeiroh2.getBoundingClientRect()
console.log(rect.top)


if(rect< 0) {
  console.log('Passou do elemnto')
}
// console.log(
//   window.innerHeight, //width da janela
//   window.outerHeight, //soma dev tools tambem
//   window.innerWidth,  //heigth da janela
//   window.outerWidth,  //soma da barra de endereco
//   window.pageYOffset, //distancia total do scroll horizontal
//   window.pageXOffset  //distancia total do scroll vertical
// )

const small = window.matchMedia('(max-width: 600px)').matches
if(small){
  console.log('usuario mobile')
} else {
  console.log('usuario desktop')
}

//verifique a distancia da primeira imagem em relacao ao topo da pagina
const iemige = document.querySelector('img')
const iemigeResultado = iemige.offsetTop
console.log(iemigeResultado)


//Retorne a soma da largura de todas as imagens
function somaImagens(){
  const todasImagens = document.querySelectorAll('img')
  let soma = 0
  todasImagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth
    console.log(imagem.offsetWidth)
  })
  console.log(soma)
}

// window.onload = function() {
  somaImagens()
}

//Verifique se os links da pagina possuem (48px por 48px)
const links = document.querySelectorAll('a')
links.forEach((link) => {
  const linkWidth = link.offsetWidth
  const linkHeigth = link.offsetHeight
  if(linkWidth >= 48 && linkHeigth >= 48) {
    console.log(`${link} possue acessibilidade`)
  } else {
    console.log(`${link} não possue acessibilidade`)
  }
})

//Se o browser for menor que 720px adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches
if(browserSmall){
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}

