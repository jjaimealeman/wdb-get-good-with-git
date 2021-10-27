const pageContents = document.querySelector('ul#page-contents');
const articles = document.querySelectorAll('article');
const body = document.querySelector('body');

// Build page contents nav & add article script
articles.forEach(article => {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    const script = document.createElement('script');

    anchor.href = `#${article.id}`;
    anchor.innerText = article.children[0].innerText;
    script.src = `scripts/aarons_scripts/${article.id.replaceAll('-','_')}.js`;

    li.appendChild(anchor);
    pageContents.appendChild(li);
    body.appendChild(script);
});