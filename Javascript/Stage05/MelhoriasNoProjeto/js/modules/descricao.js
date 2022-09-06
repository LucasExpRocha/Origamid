export default function descricaoAnimais () {
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