import outside from './clickOutsite.js'

export default function menuMobile(){
    const menuBtn = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['touchstart', 'click']
    
    if (menuBtn){

        function openMenu() {
            menuList.classList.toggle('ativo')
            menuBtn.classList.toggle('ativo')
            
            outside(menuList, eventos, () => {
                menuBtn.classList.remove('ativo')
                menuList.classList.remove('ativo')
            })
        }
        eventos.forEach(userEvent => menuBtn.addEventListener(userEvent, openMenu))
    }
}

