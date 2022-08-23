// Retorne o url da página atual utilizando o objeto window

const url = window.location.href;
console.log('\n\n\n',url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const docPage = document.querySelector('.ativo');
console.log(docPage)

// Retorne a linguagem do navegador

console.log(window.navigator.language)

// Retorne a largura da janela 

console.log (window.innerWidth)