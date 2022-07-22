// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll('.menu a')

menu.forEach((item) => item.classList.add('active'));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menu.forEach((item) => item.classList.remove('active'));

menu[0].classList.add('active');

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img')

imgs.forEach((img) => console.log(img.hasAttributes('alt')));

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('.menu a[href^="www"')

linkExterno.setAttribute('src', 'https://github.com/LucasExpRocha')