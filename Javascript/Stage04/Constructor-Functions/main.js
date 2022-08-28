// Transforme o objeto abaixo em uma Constructor Function

function Pessoa (name, old) {
    this.nome = name;
    this.idade = old;
    this.andar = function () {
      console.log(this.nome + ' andou');
    }
}
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  
const pessoaUm = new Pessoa('João', 20)
const pessoaDois = new Pessoa('Maria', 25)
const pessoaTres = new Pessoa('Bruno', 15)
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
function Dom (seletor) {
    const elementos = document.querySelectorAll(seletor);
    this.elements = elementos

    this.addClass = function (classe) {
        elementos.forEach(el => { el.classList.add(classe) })
    };
    this.removeClass = function (classe) {
        elementos.forEach(el => { el.classList.remove(classe) })
    };
}