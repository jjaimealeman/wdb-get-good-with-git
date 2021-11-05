const docContainer = document.querySelector('#container');

const navLocations = [
    {
        html: `Home`,
        href: `index.html`
    },
    {
        html: `Aaron's Page`,
        href: `aaron.html`
    },
    {
        html: `Shakti's Page`,
        href: `shakti.html`
    },
    {
        html: `Levi's Page`,
        href: `levi.html`
    }
];

/**
 * @typedef HtmlElement
 * @type {object} document.createElement
 */

/**
* @param {string} elemType Element Type
* @param {Object} options
* @param {string|string[]} options.classList Class/Classlist
* @param {string} options.textContent InnerText
* @param {string} options.href Anchor Href
* @param {string} options.src Image Source
* @param {string} options.rel Image Source
* @returns {HtmlElement} Html Element
*/
const newElem = (elemType, options) => {
    const elem = document.createElement(elemType);

    const classList = options && options.classList ? options.classList : null;
    const textContent = options && options.textContent ? options.textContent : null;
    const href = options && options.href ? options.href : null;
    const src = options && options.src ? options.src : null;
    const rel = options && options.rel ? options.rel : null;

    if (classList && Array.isArray(classList)) {
        elem.classList.add(...classList);
    } 
    if (classList && !Array.isArray(classList)) {
        elem.classList.add(classList);
    }
    
    if (textContent) elem.innerText = textContent;
    if (href) elem.href = href;
    if (src) elem.src = src;
    if (rel) elem.rel = rel;

    return elem;
}

const buildNav = () => {
    const navContainer = newElem('nav', {
        classList: 'main-nav'
    })

    const navContainerList = newElem('ul');
    
    navLocations.forEach((link, i) => {
        const listItem = newElem('li');

        listItem.appendChild(
            newElem('a', {
                href: link.href,
                textContent: link.html
            })
        );

        navContainerList.appendChild(listItem);
    });

    navContainer.appendChild(navContainerList);
    docContainer.prepend(navContainer);

    const menuContainer = newElem('div', {
        classList: 'parent'
    });

    menuContainer.appendChild(
        newElem('img', {
            classList: 'child',
            src: 'shakti-images/menu.png'
        })
    );

    docContainer.prepend(menuContainer);
}

buildNav();
// add stylesheet
document.head.appendChild(
    newElem('link', {
        rel: 'stylesheet',
        href: 'css/nav.css'
    })
);

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