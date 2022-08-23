function descricaoAnimais () {
    const fotoAnimais = document.querySelectorAll('.js-tabmenu li')
    const textoAnimais = document.querySelectorAll('.js-tabcontent div')

    if (fotoAnimais.length && textoAnimais.length){
        function ativarDescricao (index) {
            textoAnimais.forEach((texto) => {
                texto.classList.remove('ativo')
            });
            textoAnimais[index].classList.add('ativo')
        }


        fotoAnimais.forEach((foto, index) => {
            foto.addEventListener('click', () => {
                ativarDescricao(index)
            })
        })

        ativarDescricao(0)
    }
}
descricaoAnimais()

function accordionList () {
    const accordion = document.querySelectorAll('.js-accordion-list dt')

    if (accordion.length){
        accordion.forEach((eachDT) => {
            eachDT.addEventListener('click', () => {
                eachDT.classList.toggle('ativo')
                eachDT.nextElementSibling.classList.toggle('ativo')
            })
        })
    }
}
accordionList()

const linksInternos = document.querySelectorAll('a[href^="#"]')

function scrollToSection (event) {
    const atributo = event.currentTarget.getAttribute('href')
    const section = document.querySelector(atributo)
    const topo = section.offsetTop;

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})

const animarScroll = document.querySelectorAll('.js-scroll')
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