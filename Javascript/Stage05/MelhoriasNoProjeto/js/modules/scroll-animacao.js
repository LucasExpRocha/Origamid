export default function scrollAnimacao() {
    const animarScroll = document.querySelectorAll('[data-scroll]')
    const tamanhoJanela = window.innerHeight

    function animacaoScroll () {
        animarScroll.forEach((sections) => {
            const sectionTop = sections.getBoundingClientRect().top
            const aparecerSection = (tamanhoJanela * 0.7) > sectionTop

            if (aparecerSection)
                sections.classList.add('ativo')
        })
    }

    animacaoScroll()

    window.addEventListener('scroll', animacaoScroll)
}