export default function numerosAnimais() {
    function animaNumeros () {
    
        const numeros = document.querySelectorAll('[data-numero]');
        
        numeros.forEach(numero => {
            const total = +numero.innerText;
            let start = 0
            const animacao = setInterval(() => {
                start += Math.floor(total / 100);
                numero.innerText = start;
                if (start > total) numero.innerText = total;
            }, 10 + Math.random());
        })
    }
        
    function handleMutation(mutation) {
        if(mutation[0].target.classList.contains('ativo'))
            observer.disconnect()
            animaNumeros()
    }
    
    const observerTarget = document.querySelector('.numeros');
    const observer = new MutationObserver(handleMutation)
    
    observer.observe(observerTarget, {attributes: true})
}
