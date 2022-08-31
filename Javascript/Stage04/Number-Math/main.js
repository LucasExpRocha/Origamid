// Retorne um número aleatório
// entre 1050 e 2000

let umNumeroAleatorio = Math.round(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(umNumeroAleatorio)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const novosNumeros = numeros.split(', ')

console.log(Math.max(...novosNumeros))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let somaTotal = 0;

listaPrecos.forEach((item) => {
    let numeroLimpo = parseFloat(item.toLowerCase().replace('r$', '').trim().replace(',','.'))
    somaTotal += numeroLimpo
})

console.log(somaTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))