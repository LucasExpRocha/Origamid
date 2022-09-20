// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const cep = document.querySelector('#cep')
const info = document.querySelector('span')


cep.addEventListener('change',() => {
    const numerosCep = +cep.value
    acharCep(numerosCep)
})
cep.addEventListener('focus',() => {
    info.style.display = 'inline-block'
    setTimeout(() => info.style.display = 'none', 3000)
})

function acharCep (numerosCep){
    const link = `https://viacep.com.br/ws/${numerosCep}/json/`
    const x = fetch(link)
    
    x.then(response => response.json())
        .then(res => {
            console.log(res)
            document.forms.localizacao.elements.bairro.value = res.bairro
            document.forms.localizacao.elements.cidade.value = res.localidade
            document.forms.localizacao.elements.estado.value = res.uf

        })
    
}



// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

setInterval(() => {
    fetch(`https://blockchain.info/ticker`)
        .then(response => response.json())
        .then(resJson => console.log(resJson.BRL))
}, 300 * 1000)

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

fetch(`https://api.chucknorris.io/jokes/random`)
    .then(response => response.json())
    .then(respJSON => console.log(respJSON))