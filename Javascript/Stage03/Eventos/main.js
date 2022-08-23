// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const allLinks = document.querySelectorAll('a[href^="#"]');

function handleLinks (link) {
    link.preventDefault();
    allLinks.forEach((link) => {
        link.classList.remove('ativo');
    })
    link.target.classList.add('ativo')
}

allLinks.forEach((link) => {
    link.addEventListener('click', handleLinks)
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const body = document.body

body.addEventListener('click', (event) => {
    console.log(event.target)
    removerElemento(event.target)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function removerElemento (event) {
    event.remove()
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

window.addEventListener('keypress', (event) => {
    switch (event.key) {
        case 't':
            document.documentElement.classList.add('textoMaior') // falta adicionar o texto maior no css
            break
        default:
            break
    }
})