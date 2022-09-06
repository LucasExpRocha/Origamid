// Crie uma função que verifique
// corretamente o tipo de dado

function verificarDado (dado) {
  return Object.prototype.toString.call(dado)
}

frutas = ["Banana", "Pera"]
carro = {
  cor: 'preto'
}

console.log(verificarDado(frutas))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {lados: 4}

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
})

Object.freeze(quadrado)
console.log(Object.isFrozen(quadrado))

// Previna qualquer mudança
// no objeto abaixo

const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.seal(configuracao)
  
  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))
  