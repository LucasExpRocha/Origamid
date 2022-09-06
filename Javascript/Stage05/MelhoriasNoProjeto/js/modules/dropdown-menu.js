import Outside from './clickOutsite.js';

export default function dropDownMenu () {
    const dropDown = document.querySelectorAll('[data-dropdown]');
    
    dropDown.forEach((menu) => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleEvent)
        })
    })
    
    function handleEvent (event) {
        event.preventDefault()
        this.classList.add('ativo')
    
        Outside(this, ['touchstart', 'click'], () => {
            this.classList.remove('ativo')
        })
    }
}

/* function clickOutside (element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside'

    if (!element.hasAttribute(outside)) {
        events.forEach(userEvent => html.addEventListener(userEvent, handlOutsideClick))
        element.setAttribute(outside, '');

        function handlOutsideClick(event) {
            if (!element.contains(event.target)) {
                element.removeAttribute(outside)
                events.forEach(userEvent => html.removeEventListener(userEvent, handlOutsideClick))
                callback()
            }
        }
    }
} */