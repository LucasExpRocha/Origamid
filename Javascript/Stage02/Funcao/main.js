// Crie uma função para verificar se um valor é Truthy

function Truthy(value) {
    if (value) {return console.log("Truthy: " + value);}
}

Truthy(1)

function isTruthy(value) {
    return !!value
}

isTruthy(2)


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function Perimetro(ladoA, LadoB, LadoC, LadoD) {
    return console.log(ladoA + LadoB + LadoC + LadoD)
}

Perimetro(1, 2, 3, 4)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function studantUser(){
    let userName = 'Lucas',
        lastName = 'Rocha';

        return console.log(`Studant name is: ${userName} ${lastName}`)
}

studantUser()

// Crie uma função que verifica se um número é par

function verificNumber(number) {
    
    if (number % 2 === 0) {console.log(`The number ${number} is even`)}
    else console.log(`The number ${number} is odd`)
    
}

verificNumber(1)
verificNumber(2)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function verificType(valueType) {
    console.log(typeof(valueType))
}

verificType([])
verificType('hello')


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', () => studantUser())

// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`);

    function jaVisitei(paisesVisitados) {
        return console.log(`Já visitei ${paisesVisitados} do total de ${totalPaises} países`);
    }
    jaVisitei(paisesVisitados);
}
precisoVisitar(20);

