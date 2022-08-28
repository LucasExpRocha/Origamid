// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas (nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoas.prototype.nomeTodo = function () {
   return `${this.nome} ${this.sobrenome}`
}

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

NodeList.entries
NodeList.forEach
NodeList.item
NodeList.keys
NodeList.values

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(NodeList.prototype)
(7) ['entries', 'keys', 'values', 'forEach', 'length', 'item', 'constructor']


(4) ['length', 'item', 'namedItem', 'constructor']
HTMLCollection.item
HTMLAllCollection.namedItem

Object.getOwnPropertyNames(Document.prototype)



// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String