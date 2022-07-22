// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const dadosPessoais = {
    name: 'Lucas',
    lastname: 'Rocha',
    age: 27
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.fullName = function() {
    return console.log(`${this.name} ${this.lastname}`)
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

  
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const labrador = {
    breed: 'labrador',
    name: 'Bola',
    color: '#000',
    seeMan(person) {
        if(person == 'man') {return console.log('Dog au au')}
        else {return console.log("Isn't a man")}
    }
}