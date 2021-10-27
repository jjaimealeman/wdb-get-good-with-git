const pageContents = document.querySelector('ul#page-contents');
const articles = document.querySelectorAll('article');
const body = document.querySelector('body');

const jsDemos = document.querySelectorAll('.code-demo.js');
const red = ['const', 'let', 'var', 'if', 'async', 'else', 'return', 'function', '&lt;','&gt;','+'];
const grey = ['(', ')', '{', '}', '[', ']', '|', '&amp;', ','];
const equalsRegex = /=/g;

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

jsDemos.forEach(script => {
    script.innerHTML = script.innerHTML.replaceAll(equalsRegex, `<span class="red">=</span>`)
    for (let term of red) {
        script.innerHTML = script.innerHTML.replaceAll(term, `<span class="red">${term}</span>`);
    }
    for (let term of grey) {
        script.innerHTML = script.innerHTML.replaceAll(term,`<span class="grey">${term}</span>`);
    }
})