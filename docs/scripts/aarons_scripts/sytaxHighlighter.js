const jsDemos = document.querySelectorAll('.code-demo.js');
const hard = [
    'const',
    'let',
    'var',
    'if',
    'async',
    'else',
    'return',
    'function',
    '&lt;',
    '&gt;',
    '+',
    '&semi;',
    // '\='
];
const soft = ['(', ')', '{', '}', '[', ']', '|', '&amp;', ','];
const equalsRegex = /=/g;
const semiRegex = /(?<!&\w*);/g;

jsDemos.forEach(script => {
    script.innerText = script.innerText.replaceAll(equalsRegex, `<span class="hard">\=</span>`)
    script.innerHTML = script.innerText.replaceAll(semiRegex, '<span class="hard">&semi;</span>');

    for (let term of hard) {
        script.innerHTML =
            script.innerHTML.replaceAll(term, `<span class="hard">${term}</span>`);
    }
    for (let term of soft) {
        script.innerHTML =
            script.innerHTML.replaceAll(term, `<span class="soft">${term}</span>`);
    }
});