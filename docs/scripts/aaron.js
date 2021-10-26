const pageContents = document.querySelector('ul#page-contents');
const articles = document.querySelectorAll('article');

// Build page contents nav
articles.forEach(article => {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = `#${article.id}`;
    anchor.innerText = article.children[0].innerText;
    li.appendChild(anchor);
    pageContents.appendChild(li);
});