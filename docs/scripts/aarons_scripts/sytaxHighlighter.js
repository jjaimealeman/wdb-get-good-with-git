const jsDemos = document.querySelectorAll('.code-demo.js');
const red = ['const', 'let', 'var', 'if', 'async', 'else', 'return', 'function', '&lt;','&gt;','+'];
const grey = ['(', ')', '{', '}', '[', ']', '|', '&amp;', ','];
const equalsRegex = /=/g;

jsDemos.forEach(script => {
    script.innerHTML = script.innerHTML.replaceAll(equalsRegex, `<span class="red">=</span>`)
    for (let term of red) {
        script.innerHTML = script.innerHTML.replaceAll(term, `<span class="red">${term}</span>`);
    }
    for (let term of grey) {
        script.innerHTML = script.innerHTML.replaceAll(term,`<span class="grey">${term}</span>`);
    }
});