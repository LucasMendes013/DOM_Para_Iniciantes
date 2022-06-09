// window.alert('ola')
const classSelecionado = document.querySelector('.h1') //Peguei a class usando '.h1' 
console.log(classSelecionado)          //Exibi no console tudo o que envolve a class acima

const bodySelecionado = document.querySelector('body')  //Peguei a tag body
console.log(bodySelecionado)    //Exibi no console a tag body da minha página

classSelecionado.addEventListener('click', function(){
  console.log('clicou em', classSelecionado.innerText)  //Retorna o texto que existe dentro da class '.h1'
})  

const classeAtivo = document.querySelector('.ativo')
console.log(classeAtivo)

