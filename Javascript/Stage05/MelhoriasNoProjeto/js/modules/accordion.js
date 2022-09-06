export default function accordionList () {
    const accordion = document.querySelectorAll('[data-accordion="list"] dt')

    if (accordion.length){
        accordion.forEach((eachDT) => {
            eachDT.addEventListener('click', () => {
                eachDT.classList.toggle('ativo')
                eachDT.nextElementSibling.classList.toggle('ativo')
            })
        })
    }
}