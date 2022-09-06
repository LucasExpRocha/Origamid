// Mude a cor da tela para azul e depois para vermelho a cada 2s.

let index = 0;
document.body.style.backgroundColor = 'red'
const mudarTela = setInterval(() => {
    if(document.body.getAttribute('style').endsWith('blue;')) {
        document.body.style.backgroundColor = 'red'
    } else {
        document.body.style.backgroundColor = 'blue'
    }
    if (index >= 1) clearInterval(mudarTela)
    ++index;
}, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');
const play = document.querySelector('.play')
const stop = document.querySelector('.pause');

let cronometro;



play.addEventListener('click', timer)
stop.addEventListener('click', pauseTimer)
stop.addEventListener('dblclick', stopTimer)

function timer () {
    play.removeEventListener('click', timer);
    play.setAttribute('disabled', '');
    cronometro = setTimeout(() => {
        seconds.innerText = (Number(seconds.innerText) + 1).toString().padStart(2, '0')
        
        if (seconds.innerText >= 59){
            minutes.innerText = (Number(minutes.innerText) + 1).toString().padStart(2, '0')
            seconds.innerText = (0).toString().padStart(2, '0');
        }
        if (minutes.innerText >= 59){
            hours.innerText = (Number(hours.innerText) + 1).toString().padStart(2, '0')
            minutes.innerText = (0).toString().padStart(2, '0');
        } 
        timer();
    }, 1000)
}

function pauseTimer () {
    play.addEventListener('click', timer)
    play.removeAttribute('disabled')
    clearTimeout(cronometro);
}

function stopTimer () {
    pauseTimer();
    seconds.innerText = (0).toString().padStart(2, '0');
    minutes.innerText = (0).toString().padStart(2, '0');
    hours.innerText = (0).toString().padStart(2, '0');
}

