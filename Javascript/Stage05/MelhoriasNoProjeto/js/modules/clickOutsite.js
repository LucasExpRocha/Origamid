export default function Outside (element, events, callback) {

    const html = document.documentElement;
    const outside = 'data-outside'
    
    if (!element.hasAttribute(outside)) {
        
        setTimeout(() => {
            events.forEach(userEvent => html.addEventListener(userEvent, handlOutsideClick))
            element.setAttribute(outside, '');
        }, 0);
            
        function handlOutsideClick(event) {
            if (!element.contains(event.target)) {
                element.removeAttribute(outside)
                events.forEach(userEvent => html.removeEventListener(userEvent, handlOutsideClick))
                callback()
            }
        }
    }
    
}