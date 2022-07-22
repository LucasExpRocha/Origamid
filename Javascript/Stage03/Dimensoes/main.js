// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector('.animais-lista img')

altura = primeiraImagem.clientHeight

// Retorne a soma da largura de todas as imagens

const buscarTamnhoImagem = document.querySelectorAll('img')

let larguraDasImagens = 0;
buscarTamnhoImagem.forEach((img) => larguraDasImagens += img.naturalWidth)
console.log(larguraDasImagens)


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const buscarLinks = document.querySelectorAll('.menu a')

buscarLinks.forEach((item) => {
    if (item.clientHeight >= 48 && item.clientWidth >= 48) {
        console.log(`O link ${item[1]} tem o tamanho de acordo com o google`)
    } else {
        console.log('Tamanho menor que o definido pelo google')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

let tamanhoJanela = window.matchMedia('(max-width: 720px)').matches;
const menu = document.querySelector('.menu');

if (tamanhoJanela) {
    addClassMenuMobile()
} else {
    removeClassMenuMobile()
}

function addClassMenuMobile(){
    menu.classList.add('menu-mobile');
}
function removeClassMenuMobile(){
    menu.classList.remove('menu-mobile');
}
