// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const todosOsCursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(todosOsCursos)
const objetosCurso = arrayCursos.map((item) => {
  return {
      'nome': item.querySelector('h1').innerText,
      'descrição': item.querySelector('p').innerText,
      'aulas': item.querySelector('.aulas').innerText,
      'horas': item.querySelector('.horas').innerText,
  }
})

console.log(objetosCurso)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQueCem = numeros.filter((n) => {
  return n > 100 ? true : false;
})

console.log(maioresQueCem)
console.log(numeros)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some(i => i === 'Baixo');
console.log(temBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorDaCompra = compras.reduce((precoTotal, item) => {
  const itemLimpo = +item.preco.toLocaleLowerCase().replace('r$', '').trim().replace(',', '.')
  return precoTotal + itemLimpo
}, 0)

console.log(valorDaCompra)