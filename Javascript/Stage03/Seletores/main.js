// Retorne no console todas as imagens do site

console.log(document.querySelectorAll('img'))

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="./img/imagem"]')
console.log(imagens)

// Selecione todos os links internos (onde o href começa com #)

const linksExternos = document.querySelectorAll('a[href^="#"]')
console.log(linksExternos)

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroChildH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroChildH2)


// Selecione o último p do site

const paragrafos = document.querySelectorAll('p')
const ultimoParagrafo = paragrafos[paragrafos.length - 1];

console.log(ultimoParagrafo)