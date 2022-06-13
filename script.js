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