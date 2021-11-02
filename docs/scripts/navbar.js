const navBar = document.querySelector('.main-nav ul');
const hamBurger = document.querySelector('.hamburger');

hamBurger.addEventListener('click',() => {
    navBar.classList.toggle('visible')
    if (hamBurger.getAttribute('src') === 'shakti-images/menu.png') {
        hamBurger.setAttribute('src', 'shakti-images/close.png');
        document.body.style.overflow = 'hidden';
    } else {
        hamBurger.setAttribute('src', 'shakti-images/menu.png');
        document.body.style.overflow = 'visible';

    }
})