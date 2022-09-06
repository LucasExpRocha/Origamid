export default function modal () {
    
    const botaoAbrirModal = document.querySelector('[data-modal="abrir')
    const botaoFecharModal = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    
    function abreFechaModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
    }
    
    function fecharModal(event){
        if(event.target === this) {
            containerModal.classList.remove('ativo');
        }
    }
    
    botaoAbrirModal.addEventListener('click', abreFechaModal);
    botaoFecharModal.addEventListener('click', abreFechaModal);
    containerModal.addEventListener('click', fecharModal);

}

