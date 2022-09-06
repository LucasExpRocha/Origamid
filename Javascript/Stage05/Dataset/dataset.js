// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)


// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.

function descricaoAnimais () {
    const fotoAnimais = document.querySelectorAll('[data-tab="menu"] li')
    const textoAnimais = document.querySelectorAll('[data-tab="content"] div')

    if (fotoAnimais.length && textoAnimais.length){
        function ativarDescricao (index) {
            textoAnimais.forEach((texto) => {
                texto.classList.remove('ativo')
                texto.classList.remove(texto.dataset.anime)
            });
            textoAnimais[index].classList.add('ativo', textoAnimais[index].dataset.anime)
        }


        fotoAnimais.forEach((foto, index) => {
            foto.addEventListener('click', () => {
                ativarDescricao(index)
            })
        })

        ativarDescricao(0)
    }
}