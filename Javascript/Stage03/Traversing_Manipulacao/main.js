// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const clone = menu.cloneNode(true);
const copy = document.querySelector('.copy');

copy.appendChild(clone)


// Selecione o primeiro DT da dl de Faq

const primeiroDT = document.querySelector('.faq-lista').firstElementChild

// Selecione o DD referente ao primeiro DT

const primeiroDD = primeiroDT.nextElementSibling

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');
const faq = document.querySelector('#faq');

faq.outerHTML = animais.outerHTML
