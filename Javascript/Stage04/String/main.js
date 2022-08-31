// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
];

let total = 0;

transacoes.forEach((item) => {
    const novo = +(item.valor.replace('R$ ', ''))
    const novaDescricao = (item.descricao.slice(0,4)).toLowerCase()
    if(novaDescricao === 'taxa' || novaDescricao === 'rece') {
        total += novo
    }
})

console.log(total)

  // Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

console.log(transportes.split(';'))
  
  // Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

console.log((html.split('span')).join('a'))

  // Retorne o último caracter da frase
  
const frase = 'Melhor do ano!';

console.log(frase.slice(frase.length - 1))

  
  // Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalDeTaxas = 0;

transacoes2.forEach((item) => {
    const itemLimpo = (item.toLowerCase()).trim()
    if(itemLimpo.slice(0, 4) === 'taxa') totalDeTaxas += 1
})

console.log(totalDeTaxas)
  
  
  