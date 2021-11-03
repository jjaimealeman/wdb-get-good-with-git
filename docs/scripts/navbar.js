const navBar = document.querySelector('.main-nav ul');
const hamBurger = document.querySelector('.child');
const parent = document.querySelector(".parent");
parent.addEventListener("click", function(e) {
     const child = e.target.matches(".child, .child *");
     if (child) { navBar.classList.toggle('visible')
     if (hamBurger.getAttribute('src') === 'shakti-images/menu.png') {
         hamBurger.setAttribute('src', 'shakti-images/close.png');
         document.body.style.overflow = 'hidden';
     } else {
         hamBurger.setAttribute('src', 'shakti-images/menu.png');
         document.body.style.overflow = 'visible';
 
     }
}});