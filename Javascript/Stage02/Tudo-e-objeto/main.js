// nomeie 3 propriedades ou métodos de strings

const anywhere = ''

anywhere.length
anywhere.replace
anywhere.toLowerCase
anywhere.toUpperCase

// nomeie 5 propriedades ou métodos de elementos do DOM

// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

const btn = document.querySelector('#exemplo')

btn.addEventListener('click', function() {
    const textArea = document.querySelector('#exemplo')

    textArea.ariaSelected().execCommand('copy');
    alert("O texto é: " + textoCopiado.value);
})

// Usar API
// https://clipboardjs.com/