// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const parágrafos = document.querySelectorAll('p');
const arrayParagrafos = Array.from(parágrafos);

const totalCaracteres = arrayParagrafos.reduce((total, paragrafo) => total += paragrafo.innerText.length, 0)
const totalCaracteres2 = Array.prototype.reduce.call(parágrafos, (total, paragrafo) => total += paragrafo.innerText.length, 0)

console.log(totalCaracteres + '\n' + totalCaracteres2)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

const newElements = (tag, classe, content) => {
    const el = document.createElement(tag);
    classe ? el.classList.add(classe) : null;
    content ? el.innerText = content : null;
    return el;
}




console.log(newElements('a', 'ativo', 'Está criado'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = newElements.bind(null ,'h1', 'titulo')

const newTitulo = (content) => {
    const el = document.createElement('h1');
    el.classList.add('titulo');
    el.innerText = `${content}`
    return el;
}

console.log(newTitulo('Está criado'))
console.log(h1Titulo('Vamos pra cima deles mengo'))